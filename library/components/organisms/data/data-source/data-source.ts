import {
  Component,
  computed,
  contentChild,
  ContentChild,
  input,
  model,
  OnInit,
  signal,
  TemplateRef,
} from '@angular/core';
import { TableRowSelectEvent } from 'primeng/table';
import { faGridHorizontal, faTable } from '@fortawesome/free-solid-svg-icons';
import { PaginatorHelper } from '@lib/core/helpers/paginator.helper';
import { DataSourceHeader } from './data-source-header/data-source-header';
import { BaseDataSource } from 'src/app/shared/library/base';
import { GridView } from '../grid-view/grid-view';
import { TableCard } from '../../card/table-card/table-card';
import { IDataSourceFilter } from '@lib/core/interfaces/data/data-source-filter.interface';
import { Card } from '../../../atoms/other/card/card';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-data-source',
  imports: [GridView, DataSourceHeader, Card, TableCard, NgTemplateOutlet],
  templateUrl: './data-source.html',
  styleUrl: './data-source.scss',
})
export class DataSource<T> extends BaseDataSource<T> implements OnInit {
  title = input.required<string>();
  subTitle = input<string>('');

  cardTemplate = contentChild<TemplateRef<any>>('card');

  isTableView = model<boolean>(true);
  firstLoad = signal(false);

  tableView = faTable;
  cardView = faGridHorizontal;

  isTableViewSelected = computed(() => this.isTableView());

  ngOnInit(): void {
    setTimeout(() => {
      if (!this.isTableView()) {
        this.handleLoadData({
          pagination: PaginatorHelper.getDefaultPagination(),
          searchTerm: '',
          sortOrder: 'ASC',
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
