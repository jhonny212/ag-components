import { Component, computed, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ActionMode } from '@core/types/action-mode.type';
import { CommonModule } from '@angular/common';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import { ITableAction } from '@lib/core/interfaces/data/table/table-action.interface';
import { TableHeaderCell } from '../../../../atoms/data/table/table-header-cell/table-header-cell';

@Component({
  selector: 'tr[app-table-header]',
  imports: [TableHeaderCell, TableModule, CommonModule],
  templateUrl: './table-header.html',
  styleUrl: './table-header.scss',
})
export class TableHeader<T> {
  columns = input<IColumn<T>[]>([]);
  actions = input<ITableAction<T>[]>([]);
  mode = input<ActionMode>('buttons');

  actionMinWidth = computed(() => {
    if (this.mode() === 'buttons') {
      if (this.actions().length <= 4) {
        return '120px';
      }
      return 30 * this.actions().length + 'px';
    }
    return '60px';
  });
}
