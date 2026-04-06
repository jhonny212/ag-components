import { Component, input, signal, TemplateRef } from '@angular/core';
import { TableRowCollapseEvent, TableRowExpandEvent, TableRowSelectEvent } from 'primeng/table';
import { BaseDataSource } from './base-data-source';

@Component({
  template: '',
})
export abstract class BaseTable<T> extends BaseDataSource<T> {
  //Table configuration
  expandableRows = input<boolean>(false);
  expandedRowTemplate = input<TemplateRef<any> | null>(null);
  expandedRows: any = {};

  filteredData = signal<T[] | null>(null);

  //Selection
  selectionMode = input<'single' | 'multiple' | undefined | null>('single');

  handleRowSelected(event: TableRowSelectEvent<T>): void {
    this.onRowSelected.emit(event);
  }

  handleRowExpanded(event: TableRowExpandEvent<T>): void {
  
  }

  handleRowCollapsed(event: TableRowCollapseEvent): void {
   
  }
}
