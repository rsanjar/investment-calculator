import { Component, input, inject, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button[appButtonIcon]',
  imports: [CommonModule],
  templateUrl: './button-icon.html',
  styleUrl: './button-icon.scss',
  host: {
    '[disabled]': 'isDisabled()',
    class: 'btn btn-primary w-100 text-white fw-bold text-uppercase',
    type: 'submit',
    '(click)': 'onClick()',
  },
})
export class ButtonIcon {
  biIconClass = input<string>('bi-arrow-right');
  isDisabled = input<boolean>(false);

  private el = inject(ElementRef);

  onClick() {
    console.log('button clicked => : ' + this.el.nativeElement.innerText);
  }
}
