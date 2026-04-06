import { IChecked } from './checked.interface';

export interface ICheckboxDataWrapper<T> extends IChecked {
  id: T[keyof T];
  data: T;
}
