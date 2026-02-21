import { Component, input } from '@angular/core';
import { TableRowSelectEvent } from 'primeng/table';
import { BaseDataSource } from './base-data-source';

@Component({
  template: '',
})
export abstract class BaseTable<T> extends BaseDataSource<T> {
  //Table configuration


  //Selection
  selectionMode = input<'single' | 'multiple' | undefined | null>('single');

  handleRowSelected(event: TableRowSelectEvent<T>): void {
    this.onRowSelected.emit(event);
  }
}
