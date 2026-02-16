import { Component, input, inject, ViewEncapsulation, HostListener } from '@angular/core';
import { ReactiveFormsModule, ControlContainer } from '@angular/forms';
import { validateNumericInput } from '../../utils/form-helper.utils';

@Component({
  selector: 'app-input-property',
  imports: [ReactiveFormsModule],
  templateUrl: './input-property.html',
  styleUrl: './input-property.scss',
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class InputProperty {
  name = input.required<string>();
  label = input.required<string>();
  placeholder = input<string>('0');

  @HostListener('focusin')
  onFocus() {
    console.log('input focus => : ' + this.name);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    validateNumericInput(event);
  }
}
