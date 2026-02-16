import { Component, output, inject } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculatorFormModel } from '../../../../core/models/calculator-form.model';
import { CalculatorResultModel } from '../../../../core/models/calculataor-result.model';
import { InvestmentCalculatorService } from '../../services/investment-calculator.service';
import { ButtonIcon } from '../../../../shared/components/button-icon/button-icon';
import { InputProperty } from '../../../../shared/components/input-property/input-property';
import { createCalculatorFormGroup } from './calculator-form.validators';

@Component({
  selector: 'app-calculator-form',
  imports: [ReactiveFormsModule, CommonModule, ButtonIcon, InputProperty],
  templateUrl: './calculator-form.html',
  styleUrl: './calculator-form.scss',
})
export class CalculatorForm {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly investmentCalculatorService = inject(InvestmentCalculatorService);
  calculatorResult = output<CalculatorResultModel[]>();
  calculatorForm = createCalculatorFormGroup(this.fb);

  onSubmit(): void {
    if (this.calculatorForm.valid) {
      const formValue: CalculatorFormModel = this.calculatorForm.value as CalculatorFormModel;
      const results = this.investmentCalculatorService.calculateInvestment(formValue);

      this.calculatorResult.emit(results);
      //this.calculatorForm.reset();
      this.calculatorForm.markAsPristine();
    }
  }
}
