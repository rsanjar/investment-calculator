import { Injectable } from '@angular/core';
import { CalculatorFormModel } from '../../../core/models/calculator-form.model';
import { type CalculatorResultModel } from '../../../core/models/calculataor-result.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentCalculatorService {
  calculateInvestment(formValue: CalculatorFormModel): CalculatorResultModel[] {
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

        yearStartValue = currentInvestmentValue;
        yearStartTotalInvestment = totalInvestment;
      }
    }
    return results;
  }
}
