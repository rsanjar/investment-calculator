import { Component, input, signal, effect, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorResultModel } from '../../../../core/models/calculataor-result.model';
import { CalculatorNoResult } from '../calculator-no-result/calculator-no-result';

@Component({
  selector: 'app-calculator-result',
  imports: [CommonModule, CalculatorNoResult],
  templateUrl: './calculator-result.html',
  styleUrl: './calculator-result.scss',
})
export class CalculatorResult implements OnInit {
  calculatorResultList = input<CalculatorResultModel[]>();
  isFlashing = signal(false);

  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      const results = this.calculatorResultList();
      if (results && results.length > 0) {
        this.triggerFlash();
      }
    });
  }

  ngOnInit() {
    console.log(
      'CalculatorResult component initialized with results:',
      this.calculatorResultList(),
    );
  }

  ngOnChanges() {
    console.log('CalculatorResult component received new results:', this.calculatorResultList());
  }

  private triggerFlash() {
    this.isFlashing.set(true);
    setTimeout(() => this.isFlashing.set(false), 300);
  }
}
