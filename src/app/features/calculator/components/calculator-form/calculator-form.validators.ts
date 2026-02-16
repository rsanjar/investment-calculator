import { NonNullableFormBuilder, Validators, FormGroup } from '@angular/forms';
import { CalculatorFormModel } from '../../../../core/models/calculator-form.model';
import { FormControls } from '../../../../shared/utils/form-helper.utils';

/**
 * Creates and configures the calculator form group with validators
 * @param fb - NonNullableFormBuilder instance
 * @returns Configured FormGroup for calculator
 */
export function createCalculatorFormGroup(
  fb: NonNullableFormBuilder,
): FormGroup<FormControls<CalculatorFormModel>> {
  return fb.group<FormControls<CalculatorFormModel>>({
    initialInvestment: fb.control(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    annualInvestment: fb.control(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    expectedReturn: fb.control(5, {
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
    }),
    investmentDuration: fb.control(10, {
      validators: [Validators.required, Validators.min(1), Validators.max(50)],
    }),
  });
}
