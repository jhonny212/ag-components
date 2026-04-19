import { CellComponent, TypeDataCell } from '@lib/core/types/data-cell.type';

export interface IDataCell<T> {
  field?: keyof T;
  type?: TypeDataCell;
  styles?: { [value: string]: string };
  class?: string;
  format?: (value: T) => any;
  component?: (row: T) => CellComponent;
  canRenderComponent?: (row: T) => boolean;
}
