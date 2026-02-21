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
import { SearchInput } from "../../../molecules";
import { TableHeader } from "../../../molecules/data/table/table-header/table-header";
import { TableRow } from "../../../molecules/data/table/table-row/table-row";
import { EmptyMessage } from "../../../atoms";

@Component({
  selector: 'app-table',
  imports: [TableModule, FormsModule, IconFieldModule, InputIconModule, FontAwesomeModule, SearchInput, TableHeader, TableRow, EmptyMessage],
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
    if (this.addEmptyRows()) {
      const emptyRowsCount =
        (this.dataSourceFilter()?.pagination.pageSize || 10) - (this.data()?.length || 0);
      if (emptyRowsCount === this.dataSourceFilter()?.pagination.pageSize) {
        return [];
      }
      const emptyRows = Array.from({ length: emptyRowsCount }, () => ({}) as T);
      return [...(this.data() || []), ...emptyRows];
    }
    return this.data();
  });

  handlePage({ first, rows }: TablePageEvent) {}

  override handleRowSelected(event: TableRowSelectEvent<T>): void {
    const value: T = event.data as T;
    if (Object.keys(value as object).length === 0) {
      return;
    }
    this.onRowSelected.emit(event);
  }

  handleSearch() {
    this.dataSourceFilter.update((prev) => ({
      ...prev,
      searchTerm: this.searchTerm(),
    }));
    this.onLoadData.emit({
      ...this.dataSourceFilter(),
      searchTerm: this.searchTerm(),
    });
  }

  handleLoadData(event: TableLazyLoadEvent) {
    const newData = this.tableLazyLoadEventToDataSourceFilter(event);
    this.updateDataSourceFilter(newData);
    this.onLoadData.emit({
      ...this.dataSourceFilter(),
      ...newData,
    });
    // this.handlePage({
    //   first: event.first || 0,
    //   rows: event.rows || 10,
    // });
    // this.onLoadData.emit({
    //   pagination: this.pageStateToPagination({
    //     first: event.first || 0,
    //     rows: event.rows || 10,
    //   }),
    //   searchTerm: this.searchTerm(),
    //   sortColumn: event.sortField as keyof T,
    //   sortDirection: event.sortOrder === 1 ? 'ASC' : 'DESC',
    // });
  }

  // handleAction(event: ICellEvent<T>) {
  //   this.onAction.emit(event);
  // }

  isObjectNotEmpty(value: any): boolean {
    return Object.keys(value).length > 0;
  }
}
