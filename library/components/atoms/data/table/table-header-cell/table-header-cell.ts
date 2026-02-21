import { Component, computed, input } from '@angular/core';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table-header-cell',
  imports: [TableModule],
  templateUrl: './table-header-cell.html',
  styleUrl: './table-header-cell.scss',
})
export class TableHeaderCell<T> {
  header = input<IColumn<T>>();

  headerName = computed(() => {
    const result = this.header()?.header?.format?.();
    if (result !== undefined) {
      return result;
    }
    return this.header()?.header?.label || '';
  });
}
