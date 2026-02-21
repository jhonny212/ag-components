import { Component, computed, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import type { ValidationError } from '@angular/forms/signals';
import { BaseField } from './base-fields';

@Component({
  template: '',
})
export abstract class BaseInputField<T> extends BaseField implements FormValueControl<T | null> {
  invalid = input<boolean>(false);
  errors = input<readonly ValidationError.WithOptionalField[]>([]);

  value = model<T | null>(null);
  touched = model<boolean>(false);

  hasRequired = computed(() => {
    return this.errors().some((error) => error.kind === 'required') && this.showRequired();
  });

  handleChange(value: T | null) {
    this.value.set(value);
  }
}
