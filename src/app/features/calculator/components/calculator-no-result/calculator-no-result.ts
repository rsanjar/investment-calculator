import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-calculator-no-result',
  imports: [],
  templateUrl: './calculator-no-result.html',
  styleUrl: './calculator-no-result.scss',
})
export class CalculatorNoResult {
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    console.log('CalculatorNoResult component initialized');
    const interval = setInterval(() => {
      console.log('CalculatorNoResult component is still active');
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
      console.log('CalculatorNoResult component interval cleared on destroy');
    });
  }

  // ngOnDestroy(): void {
  //   if (this.interval) {
  //     clearInterval(this.interval);
  //     console.log('CalculatorNoResult component interval cleared');
  //   }
  //   console.log('CalculatorNoResult component destroyed');
  // }
}
