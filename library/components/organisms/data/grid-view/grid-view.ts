import { Component, computed, signal } from '@angular/core';
import { GridViewMode } from '@lib/core/types/data-source-view.type';
import { PaginatorState } from 'primeng/paginator';
import { TableLazyLoadEvent } from 'primeng/table';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { BaseDataSource } from 'src/app/shared/library/base';
import { GridCard } from '../../../molecules';
import { Paginator } from '../../../atoms/data/paginator/paginator';
import { EmptyMessage } from '../../../atoms/messages/empty-message/empty-message';
import { Button } from "../../../atoms/buttons/button/button";

@Component({
  selector: 'app-grid-view',
  imports: [GridCard, Paginator, EmptyMessage, Button],
  templateUrl: './grid-view.html',
  styleUrl: './grid-view.scss',
})
export class GridView<T> extends BaseDataSource<T> {
  mode = signal<GridViewMode>('card');
  selectedItem = signal<T | null>(null);

  emptyIcon = faTable;

  selectedPk = computed(
    () => this.selectedItem()?.[this.dataSourceConfig().key as keyof T] ?? null,
  );

  first = computed(() => {
    return this.dataSourceFilter().pagination.page * this.dataSourceFilter().pagination.pageSize;
  });

  rows = computed(() => {
    return this.dataSourceFilter().pagination.pageSize;
  });

  handleClick(item: T): void {
    if (this.dataSourceConfig().isClickable) {
      this.selectedItem.set(item);
      this.onRowSelected.emit({
        data: item,
        originalEvent: null as any,
        type: 'row',
      });
    }
  }

  handlePageChange(event: PaginatorState): void {
    this.dataSourceFilter.update((prev) => ({
      ...prev,
      pagination: this.pageStateToPagination(event),
    }));
    const { sortDirection, sortColumn } = this.dataSourceFilter();
    this.onLoadData.emit({
      pagination: this.pageStateToPagination({
        first: event.first || 0,
        rows: event.rows || 10,
      }),
      searchTerm: this.searchTerm(),
      sortColumn: sortColumn,
      sortDirection: sortDirection,
    });
  }

  handleLoadData(event: TableLazyLoadEvent): void {
    this.onLoadData.emit({
      pagination: this.pageStateToPagination({
        first: event.first || 0,
        rows: event.rows || 10,
      }),
      searchTerm: this.searchTerm(),
      sortColumn: event.sortField as keyof T,
      sortDirection: event.sortOrder === 1 ? 'ASC' : 'DESC',
    });
  }
}
