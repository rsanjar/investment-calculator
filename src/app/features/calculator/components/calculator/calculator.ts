import { Component, signal } from '@angular/core';
import { CalculatorForm } from '../calculator-form/calculator-form';
import { CalculatorResult } from '../calculator-result/calculator-result';
import { CalculatorResultModel } from '../../../../core/models/calculataor-result.model';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorForm, CalculatorResult],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  calculatorResults = signal<CalculatorResultModel[]>([]);

  onCalculatorResult(results: CalculatorResultModel[]): void {
    this.calculatorResults.set(results);
  }
}
