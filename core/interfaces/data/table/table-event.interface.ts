import { ITableAction } from './table-action.interface';

export interface ICellEvent<T> {
  data: T;
  columnKey: keyof T;
  loading?: boolean;
  action?: ITableAction<T>;
}
