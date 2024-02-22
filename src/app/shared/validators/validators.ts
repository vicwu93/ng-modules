import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function allCaps(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regex = /^[A-Z]+$/;
    if (!control.value) {
      return null;
    }
    return regex.test(control.value) ? null : { allcaps: true };
  };
}
