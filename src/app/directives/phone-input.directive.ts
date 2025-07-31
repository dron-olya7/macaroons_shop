import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneInput]',
  standalone: true
})
export class PhoneInputDirective {
  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if(value.length > 12) {
      value = value.slice(0, 12);
    }

    if (value.startsWith('375') && value.length <= 12) {
      let formatted = '';
      if (value.length > 0) formatted += `+${value.slice(0, 3)}`;
      if (value.length > 3) formatted += ` (${value.slice(3, 5)})`;
      if (value.length > 5) formatted += ` ${value.slice(5, 8)}`;
      if (value.length > 8) formatted += `-${value.slice(8, 10)}`;
      if (value.length > 10) formatted += `-${value.slice(10)}`;

      this.control.control?.setValue(formatted, { emitEvent: false });
    } else if (value === '') {
      this.control.control?.setValue('', { emitEvent: false });
    }
  }
}
