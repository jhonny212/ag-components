import { Component, computed, input } from '@angular/core';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import { ButtonComponent, CheckboxComponent } from '@lib/core/types/data-cell.type';
import { Button } from '../../buttons/button/button';
import { Checkbox } from '../../input/checkbox/checkbox';
import { ICheckboxDataWrapper } from '@lib/core/interfaces/checkbox/data-source-checkbox.interface';

@Component({
  selector: 'app-cell-component',
  imports: [Button, Checkbox],
  templateUrl: './cell-component.html',
  styleUrl: './cell-component.scss',
})
export class CellComponent<T> {
  column = input.required<IColumn<T>>();
  rowValue = input.required<any>();

  isComponent = computed(() => !!this.column().data.component);

  buttonComponentDef = computed<ButtonComponent | null>(() => {
    const component = this.column().data.component;
    if (component) {
      return component(this.rowValue()) as ButtonComponent;
    }
    return null;
  });

  checkboxDef = computed(() => {
    const checkbox = this.column().data.component;
    if (checkbox) {
      return checkbox(this.rowValue()) as CheckboxComponent;
    }
    return null;
  });
}
