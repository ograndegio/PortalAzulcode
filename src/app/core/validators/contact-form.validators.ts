import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ContactFormValidators {
  static noWhitespaceOnly(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = (control.value as string | null) ?? '';
      return value.trim().length > 0 ? null : { whitespaceOnly: true };
    };
  }
}
