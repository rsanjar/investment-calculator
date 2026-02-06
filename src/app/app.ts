import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorForm } from './features/calculator/components/calculator-form/calculator-form';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { CalculatorResult } from './features/calculator/components/calculator-result/calculator-result';
import { CalculatorResultModel } from './core/models/calculataor-result.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorForm, Header, Footer, CalculatorResult],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('investment-calculator');
  calculatorResults = signal<CalculatorResultModel[]>([]);

  onCalculatorResult(results: CalculatorResultModel[]): void {
    this.calculatorResults.set(results);
  }
}
