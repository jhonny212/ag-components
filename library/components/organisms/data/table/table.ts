import { Component, computed, signal, ViewChild } from '@angular/core';
import {
  Table as TablePrimeng,
  TableModule,
  TableLazyLoadEvent,
  TableRowSelectEvent,
  TablePageEvent,
} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { BaseTable } from 'src/app/shared/library/base';
import { SearchInput } from '../../../molecules';
import { TableHeader } from '../../../molecules/data/table/table-header/table-header';
import { TableRow } from '../../../molecules/data/table/table-row/table-row';
import { EmptyMessage } from '../../../atoms/messages/empty-message/empty-message';
import { Button } from '../../../atoms/buttons/button/button';
import { NgTemplateOutlet } from '@angular/common';
import { filterDataTable } from '@core/util/general.util';

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    FontAwesomeModule,
    SearchInput,
    TableHeader,
    TableRow,
    EmptyMessage,
    Button,
    NgTemplateOutlet,
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table<T> extends BaseTable<T> {
  @ViewChild('dtTable') table!: TablePrimeng<T>;

  //Properties
  selectedProduct!: any;
  metaKey: boolean = true;
  emptyIcon = faTable;

  dataTableData = computed(() => {
    if (this.filteredData() != null && !this.serverSide()) {
      return this.filteredData() || [];
    }
    if (this.addEmptyRows()) {
      const emptyRowsCount =
        (this.dataSourceFilter()?.pagination.pageSize || 10) - (this.data()?.length || 0);
      if (
        emptyRowsCount === this.dataSourceFilter()?.pagination.pageSize &&
        !this.isLoadingData()
      ) {
        return [];
      }
      const emptyRows = Array.from({ length: emptyRowsCount }, () => ({}) as T);
      return [...(this.data() || []), ...emptyRows];
    }
    return this.data();
  });

  dataTableColumns = computed(() => this.dataSourceConfig()?.columns || []);

  handlePage({ first, rows }: TablePageEvent) {}

  override handleRowSelected(event: TableRowSelectEvent<T>): void {
    const value: T = event.data as T;
    if (Object.keys(value as object).length === 0) {
      return;
    }
    this.onRowSelected.emit(event);
  }

  handleSearch(event: string | null) {
    if (!this.serverSide()) {
      this.fontSideFilter(event || '');
      return;
    }
    this.serverSideFilter();
  }

  handleLoadData(event: TableLazyLoadEvent) {
    const newData = this.tableLazyLoadEventToDataSourceFilter(event);
    this.updateDataSourceFilter(newData);
    this.onLoadData.emit({
      ...this.dataSourceFilter(),
      ...newData,
    });
  }

  isObjectNotEmpty(value: any): boolean {
    return Object.keys(value).length > 0;
  }

  protected override handleReloadData(): void {
    this.selectedProduct = null;
    super.handleReloadData();
  }

  private fontSideFilter(event: string): void {
    const data = filterDataTable(this.data() || [], this.dataSourceConfig()?.columns || [], {
      value: event || '',
    });
    this.filteredData.set(data);
  }

  private serverSideFilter(): void {
    this.dataSourceFilter.update((prev) => ({
      ...prev,
      searchTerm: this.searchTerm(),
    }));
    this.onLoadData.emit({
      ...this.dataSourceFilter(),
      searchTerm: this.searchTerm(),
    });
  }
}
