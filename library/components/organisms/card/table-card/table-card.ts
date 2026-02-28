import { Component, computed, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Table } from '../../data/table/table';
import { BaseTable } from 'src/app/shared/library/base';
import { IDataSourceFilter } from '@lib/core/interfaces/data/data-source-filter.interface';
import { Card } from '../../../atoms/other/card/card';

@Component({
  selector: 'app-table-card',
  imports: [Table, CardModule, Card],
  templateUrl: './table-card.html',
  styleUrl: './table-card.scss',
})
export class TableCard<T> extends BaseTable<T> {
  title = input.required<string>();
  subTitle = input<string>();

  handleLoadData(event: IDataSourceFilter<T>) {
    this.onLoadData.emit(event);
  }
}
