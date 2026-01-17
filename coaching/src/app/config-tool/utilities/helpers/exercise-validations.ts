import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noNegativeValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  if (keywordsMatched(raw)) return null;
  const value = Number(control.value);
  return value < 0 ? {negative: true} : null;
}

export function noZeroValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  if (keywordsMatched(raw)) return null;
  const value = Number(raw);
  return value === 0 ? {zeroNotAllowed: true} : null;
}

export function integerOnlyValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  if (keywordsMatched(raw)) return null;
  const value = Number(raw);
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

export function lowerOrEqualToHundred(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  if (isMaxKeyword(raw)) return null;
  const value = Number(raw);
  return value <= 100 ? null : {moreThenHundred: true};
}

function isMaxKeyword(value: unknown): boolean {
  return typeof value === 'string' && value.trim().toLowerCase() === 'max';
}

export function isEachPattern(value: unknown): boolean {
  if (typeof value !== 'string') return false;

  const v = value.trim().toLowerCase();

  if (v === '0' || v === '0 each') return false;

  const regex = /^(?:\d+|max)(?:\s+each)?$/;

  return regex.test(v);
}

function keywordsMatched(value: unknown): boolean {
  return  isMaxKeyword(value) || isEachPattern(value);
}

export function getErrorText(control: AbstractControl | null): string | null {
  if (!control || !control.errors) return '';

  const errors: ValidationErrors = control.errors;
  const messages: string[] = [];

  if (errors['required']) {
    messages.push('This field is required.');
  }

  if (errors['min']) {
    messages.push(`Value must be at least ${errors['min'].min}.`);
  }

  if (errors['max']) {
    messages.push(`Value must be at most ${errors['max'].max}.`);
  }

  if (errors['pattern']) {
    messages.push('Value has an invalid format.');
  }

  if (errors['negative']) {
    messages.push('Value cannot be negative.');
  }

  if (errors['zeroNotAllowed']) {
    messages.push('Value cannot be zero.');
  }

  if (errors['notInteger']) {
    messages.push('Value must be an integer.');
  }

  if (errors['maxTwoDecimals']) {
    messages.push('Value can have at most two decimal places.');
  }

  if (errors['moreThenHundred']) {
    messages.push('Value must be 100 or less.');
  }

  if (messages.length === 0) {
    messages.push('Invalid value.');
  }

  return messages.length > 0 ? messages.join(' ') : null;
}
