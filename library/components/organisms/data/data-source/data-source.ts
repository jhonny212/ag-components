import { Component, computed, input, OnInit, signal } from '@angular/core';
import { useScreenSize } from '@core/util/general.util';
import { TableRowSelectEvent } from 'primeng/table';
import { faGridHorizontal, faTable } from '@fortawesome/free-solid-svg-icons';
import { PaginatorHelper } from '@core/helper/paginator.helper';
import { DataSourceHeader } from './data-source-header/data-source-header';
import { BaseDataSource } from 'src/app/shared/library/base';
import { GridView } from '../grid-view/grid-view';
import { TableCard } from '../../card/table-card/table-card';
import { IDataSourceFilter } from '@lib/core/interfaces/data/data-source-filter.interface';
import { Card } from '../../../atoms/other/card/card';

@Component({
  selector: 'app-data-source',
  imports: [GridView, DataSourceHeader, Card, TableCard],
  templateUrl: './data-source.html',
  styleUrl: './data-source.scss',
})
export class DataSource<T> extends BaseDataSource<T> implements OnInit {
  title = input.required<string>();
  subTitle = input<string>('');

  isTableView = signal(true);
  firstLoad = signal(false);

  tableView = faTable;
  cardView = faGridHorizontal;

  screen = useScreenSize();

  isTableViewSelected = computed(() => this.isTableView());

  dataSourceItems = computed(() => {
    return this.resource()?.value()?.data || this.data() || [];
  });

  ngOnInit(): void {
    setTimeout(() => {
      if (!this.isTableView()) {
        this.handleLoadData({
          pagination: PaginatorHelper.getDefaultPagination(),
          searchTerm: '',
          sortDirection: 'ASC',
        });
      }
    }, 100);
  }

  handleSelectRow(event: TableRowSelectEvent<T>) {
    this.onRowSelected.emit(event);
  }

  handleLoadData(event: IDataSourceFilter<T>) {
    this.onLoadData.emit(event);
  }

  handleViewChange(isTable: boolean): void {
    this.isTableView.set(isTable);
  }
}
