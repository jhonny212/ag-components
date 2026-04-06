import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseInputField } from 'src/app/shared/library/base';
import { Input } from '../../input/input/input';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-select-multi',
  imports: [MultiSelectModule, FormsModule, Input],
  templateUrl: './select-multi.html',
  styleUrl: './select-multi.scss',
})
export class SelectMulti<T> extends BaseInputField<T> {
  data = input<any>([]);
  labelKey = input<string>();
  labelRender = input<(item: T) => string>();
  onSelect = output<T>();
  showClear = input<boolean>(false);
  fieldKey = input.required<string>();

  onInputChange(value: T | null): void {
    this.value.set(value);
  }
}
