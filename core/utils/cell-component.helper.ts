import { signal } from '@angular/core';
import { ICheckboxDataWrapper } from '../interfaces/checkbox/data-source-checkbox.interface';

export const toCheckBoxWrapper = <T>(data: T[], id: keyof T): ICheckboxDataWrapper<T>[] => {
  return data.map((item) => ({
    id: item[id],
    data: item,
    checked: signal(true),
  }));
};
