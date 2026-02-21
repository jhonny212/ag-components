import { TypeDataCell } from '@lib/core/types/data-cell.type';

export interface IDataCell<T> {
  field?: keyof T;
  type?: TypeDataCell;
  styles?: { [value: string]: string };
  styleClass?: string;
  format?: (value: T) => any;
  disable?: (value: any) => boolean;
}
