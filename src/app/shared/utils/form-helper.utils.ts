import { FormControl } from '@angular/forms';

export type FormControls<T> = { [K in keyof T]: FormControl<T[K]> };

/**
 * Validates keyboard input to allow only numeric characters.
 * Allows navigation keys, editing keys, and keyboard shortcuts.
 *
 * @param event KeyboardEvent from keydown listener
 * @example
 * ```typescript
 * @HostListener('keydown', ['$event'])
 * onKeyDown(event: KeyboardEvent) {
 *   validateNumericInput(event);
 * }
 * ```
 */
export function validateNumericInput(event: KeyboardEvent): void {
  const key = event.key;

  // Allow: backspace, delete, tab, escape, enter, arrows, home, end
  if (
    [
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
    ].includes(key) ||
    // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
    (event.ctrlKey && ['a', 'c', 'v', 'x'].includes(key.toLowerCase()))
  ) {
    return;
  }

  // Allow only numbers (0-9)
  if (!/^[0-9]$/.test(key)) {
    event.preventDefault();
  }
}
