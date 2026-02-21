import { TypeHeaderCell } from '@lib/core/types/header-cell.type';
import { IDataCell } from './cell.interface';

export interface IHeaderCell<T> {
  label?: string;
  type?: TypeHeaderCell;
  styles?: { [value: string]: string };
  styleClass?: string;
  format?: () => string;
  sortableField?: keyof T;
}

export interface IColumn<T> {
  header?: IHeaderCell<T>;
  data: IDataCell<T>;
  width?: string;
  minWidth?: string;
}
