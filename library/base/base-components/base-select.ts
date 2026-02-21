import { Component, input, output } from '@angular/core';
import { BaseInputField } from './base-input-field';

@Component({
  template: '',
})
export abstract class BaseSelect<T> extends BaseInputField<T> {
  data = input<T[]>([]);
  labelKey = input<keyof T>();
  labelRender = input<(item: T) => string>();
  onSelect = output<T>();
  showClear = input<boolean>(false);

}
