import { Component, computed, input, output, signal } from '@angular/core';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import {
  ButtonComponent,
  CheckboxComponent,
  ToggleComponent,
  TypeDataCell,
} from '@lib/core/types/data-cell.type';
import { Button } from '../../buttons/button/button';
import { Checkbox } from '../../input/checkbox/checkbox';
import { Toggle } from '../../buttons/toggle/toggle';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';
import { ComponentEvent } from '@lib/core/types/component-event.type';

@Component({
  selector: 'app-cell-component',
  imports: [Button, Checkbox, Toggle],
  templateUrl: './cell-component.html',
  styleUrl: './cell-component.scss',
})
export class CellComponent<T> {
  column = input.required<IColumn<T>>();
  rowValue = input.required<any>();

  cellEvent = signal<ICellEvent<T>>({
    columnKey: '' as keyof T,
    data: null as any,
    loading: signal<boolean>(false),
  });
  componentEvent = output<ICellEvent<T>>();

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

  toggleDef = computed(() => {
    const toggle = this.column().data.component;
    if (toggle) {
      return toggle(this.rowValue()) as ToggleComponent;
    }
    return null;
  });

  handleComponentEvent(event: ComponentEvent, type: TypeDataCell, value: any): void {
    const eventData: ICellEvent<T> = {
      columnKey: this.column().data.field!,
      data: this.rowValue(),
      componentEvent: event,
      loading: signal<boolean>(false),
      componentValueEvent: value,
      component: type,
    };
    this.cellEvent.set(eventData);
    this.componentEvent.emit(eventData);
  }
}
