import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noNegativeValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  if (isMaxKeyword(raw)) return null;
  const value = Number(control.value);
  if (isNaN(value)) return null;
  return value < 0 ? {negative: true} : null;
}

export function noZeroValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  if (isMaxKeyword(raw)) return null;
  const value = Number(raw);
  if (isNaN(value)) return null;
  return value === 0 ? {zeroNotAllowed: true} : null;
}

export function integerOnlyValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  if (isMaxKeyword(raw)) return null;
  const value = Number(raw);
  if (isNaN(value)) return null;
  return Number.isInteger(value) ? null : {notInteger: true};
}

export function maxTwoDecimalsValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  if (isMaxKeyword(raw)) return null;
  if (raw === null || raw === '') return null;

  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(raw.toString())
    ? null
    : {maxTwoDecimals: true};
}

function isMaxKeyword(value: unknown): boolean {
  return typeof value === 'string' && value.trim().toLowerCase() === 'max';
}
