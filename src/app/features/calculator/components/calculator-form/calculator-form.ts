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
import { InvestmentCalculatorService } from '../../services/investment-calculator.service';

type FormControls<T> = { [K in keyof T]: FormControl<T[K]> };

@Component({
  selector: 'app-calculator-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './calculator-form.html',
  styleUrl: './calculator-form.scss',
})
export class CalculatorForm {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly investmentCalculatorService = inject(InvestmentCalculatorService);
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
      const results = this.investmentCalculatorService.calculateInvestment(formValue);

      this.calculatorResult.emit(results);
      this.calculatorForm.markAsPristine();
    }
  }
}
