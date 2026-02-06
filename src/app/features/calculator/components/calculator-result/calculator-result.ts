import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorResultModel } from '../../../../core/models/calculataor-result.model';

@Component({
  selector: 'app-calculator-result',
  imports: [CommonModule],
  templateUrl: './calculator-result.html',
  styleUrl: './calculator-result.scss',
})
export class CalculatorResult {
  calculatorResultList = input<CalculatorResultModel[]>();
  isFlashing = signal(false);

  constructor() {
    effect(() => {
      const results = this.calculatorResultList();
      if (results && results.length > 0) {
        this.triggerFlash();
      }
    });
  }

  private triggerFlash() {
    this.isFlashing.set(true);
    setTimeout(() => this.isFlashing.set(false), 300);
  }
}
