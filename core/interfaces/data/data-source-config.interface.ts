import { DataSourceView } from '@lib/core/types/data-source-view.type';
import { ColorType } from '@core/types/color.type';
import { IColumn } from './table/column.interface';
import { ITableAction } from './table/table-action.interface';
import { ActionMode } from '@core/types/action-mode.type';

export interface IDataSourceConfig<T> {
  columns: IColumn<T>[];
  header?: keyof T;
  headerRender?: (item: T) => string;
  mobileMode?: DataSourceView;
  key?: keyof T;
  class?: string;
  isClickable?: boolean;
  color?: ColorType;
  actions?: ITableAction<T>[];
  actionMode?: ActionMode;
}
