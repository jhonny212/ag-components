import { ComponentEvent } from '@lib/core/types/component-event.type';
import { ITableAction } from './table-action.interface';
import { TypeDataCell } from '@lib/core/types/data-cell.type';
import { WritableSignal } from '@angular/core';

export interface ICellEvent<T> {
  data: T;
  columnKey: keyof T;
  loading: WritableSignal<boolean>;
  action?: ITableAction<T>;
  componentEvent?: ComponentEvent;
  componentValueEvent?: any;
  component?: TypeDataCell;
}
