import { Component, input, output, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  NonNullableFormBuilder,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculatorFormModel } from '../../../../core/models/calculator-form.model';
import { CalculatorResultModel } from '../../../../core/models/calculataor-result.model';
type FormControls<T> = { [K in keyof T]: FormControl<T[K]> };

@Component({
  selector: 'app-calculator-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './calculator-form.html',
  styleUrl: './calculator-form.scss',
})
export class CalculatorForm {
  private readonly fb = inject(NonNullableFormBuilder);
  calculatorResult = output<CalculatorResultModel[]>();

  calculatorForm = this.fb.group<FormControls<CalculatorFormModel>>({
    initialInvestment: this.fb.control(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    annualInvestment: this.fb.control(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    expectedReturn: this.fb.control(5, {
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
    }),
    investmentDuration: this.fb.control(10, {
      validators: [Validators.required, Validators.min(1), Validators.max(50)],
    }),
  });

  onSubmit(): void {
    if (this.calculatorForm.valid) {
      const formValue: CalculatorFormModel = this.calculatorForm.value as CalculatorFormModel;

      const results: CalculatorResultModel[] = [];
      let currentInvestmentValue = formValue.initialInvestment;
      let totalInvestment = formValue.initialInvestment;
      const monthlyInvestment = formValue.annualInvestment / 12;
      const monthlyReturnRate = formValue.expectedReturn / 100 / 12;
      let yearStartValue = formValue.initialInvestment;
      let yearStartTotalInvestment = formValue.initialInvestment;

      for (let month = 1; month <= formValue.investmentDuration * 12; month++) {
        // Calculate interest first on current balance
        const interestForMonth = currentInvestmentValue * monthlyReturnRate;
        currentInvestmentValue += interestForMonth;

        // Then add monthly contribution
        currentInvestmentValue += monthlyInvestment;
        totalInvestment += monthlyInvestment;

        if (month % 12 === 0) {
          // Interest per year = (end value - start value) - contributions made during year
          const contributionsDuringYear = totalInvestment - yearStartTotalInvestment;
          const interestEarnedThisYear =
            currentInvestmentValue - yearStartValue - contributionsDuringYear;

          results.push({
            year: month / 12,
            investmentValue: parseFloat(currentInvestmentValue.toFixed(2)),
            interestPerYear: parseFloat(interestEarnedThisYear.toFixed(2)),
            totalInvestment: parseFloat(totalInvestment.toFixed(2)),
            totalInterest: parseFloat((currentInvestmentValue - totalInvestment).toFixed(2)),
            investedCapital: parseFloat((totalInvestment - formValue.initialInvestment).toFixed(2)),
          });

          // Reset year tracking
          yearStartValue = currentInvestmentValue;
          yearStartTotalInvestment = totalInvestment;
        }
      }

      this.calculatorResult.emit(results);
      this.calculatorForm.markAsPristine();
    }
  }
}
