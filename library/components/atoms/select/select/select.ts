import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Input } from '../../input/input/input';
import { RenderItem } from '../../other/render-item/render-item';
import { BaseSelect } from '../../../../base';

@Component({
  selector: 'app-select',
  imports: [SelectModule, FormsModule, Input, RenderItem],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select<T> extends BaseSelect<T> {
  filterBy = input<keyof T>();

  onInputChange(value: T | null): void {
    this.value.set(value);
  }
}
