import { Component, computed, input, model, output, signal } from '@angular/core';
import { FilterHelper } from '@core/helper/filter.helper';
import { IPagedResource } from '@lib/core/interfaces/http/resource.interface';
import { ActionMode } from '@core/types/action-mode.type';
import { IDataSourceConfig } from '@lib/core/interfaces/data/data-source-config.interface';
import { IDataSourceFilter } from '@lib/core/interfaces/data/data-source-filter.interface';
import { IPagination } from '@lib/core/interfaces/data/pagination.interface';
import { ITableAction } from '@lib/core/interfaces/data/table/table-action.interface';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';
import { PaginatorState } from 'primeng/paginator';
import { TableLazyLoadEvent, TableRowSelectEvent } from 'primeng/table';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

@Component({
  template: '',
})
export abstract class BaseDataSource<T> {
  /**
   * Data and configuration
   */
  data = input<T[]>([]);
  dataSourceConfig = input.required<IDataSourceConfig<T>>();
  actions = input<ITableAction<T>[]>([]);
  actionMode = input<ActionMode>('buttons');
  resource = input<IPagedResource<T>>();
  enableReload = input<boolean>(true);

  /**
   * On row selection
   */
  primaryKey = input<keyof T>();
  enableRowSelection = input<boolean>(false);

  /**
   * Other properties
   */
  loading = input<boolean | undefined>(undefined);
  totalRecords = input<number>(0);
  hasBasicSearch = input<boolean>(false);
  hasPagination = input<boolean>(true);
  searchTerm = signal<string>('');
  dataSourceFilter = model<IDataSourceFilter<T>>(FilterHelper.toDefaultDataSourceFilter<T>());
  addEmptyRows = input<boolean>(true);

  /**
   * Outputs (emitters)
   */
  onRowSelected = output<TableRowSelectEvent<T>>();
  onLoadData = output<IDataSourceFilter<T>>();
  onAction = output<ICellEvent<T>>();

  /**
   * Icons
   */
  reloadIcon = signal(faRefresh);

  /**
   * Computed
   */

  tableData = computed(() => {
    return this.resource()?.value()?.data || this.data() || [];
  });

  isLoadingData = computed(() => {
    return this.loading() ?? this.resource()?.isLoading();
  });

  totalItems = computed(() => {
    return this.resource()?.value()?.total || this.totalRecords();
  });

  dataSourceActions = computed(() => {
    return this.actions().length ? this.actions() : this.dataSourceConfig().actions || [];
  });

  dataSourceActionMode = computed(() => {
    return this.dataSourceConfig().actionMode || this.actionMode();
  });

  protected pageStateToPagination(event: PaginatorState): IPagination {
    const pagination = {
      page: event.first ? event.first / (event.rows || 10) : 0,
      pageSize: event.rows || 10,
    };
    return pagination;
  }

  handleAction(action: ICellEvent<T>): void {
    this.onAction.emit(action);
  }

  protected tableLazyLoadEventToDataSourceFilter(event: TableLazyLoadEvent): IDataSourceFilter<T> {
    const pagination = this.pageStateToPagination({
      first: event.first,
      rows: event.rows || 10,
    });
    const sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
    const sortColumn = event.sortField as keyof T;
    return {
      pagination,
      sortDirection,
      sortColumn,
      searchTerm: this.searchTerm(),
    };
  }

  protected updateDataSourceFilter(newData: IDataSourceFilter<T>): void {
    this.dataSourceFilter.update((prev) => ({
      ...prev,
      ...newData,
    }));
  }

  protected handleReloadData(): void {
    this.updateDataSourceFilter({
      ...this.dataSourceFilter(),
    });
    this.onLoadData.emit({
      ...this.dataSourceFilter(),
    });
  }
}
