import { Component, computed, inject, input, output, signal } from '@angular/core';
import { ActionMode } from '@core/types/action-mode.type';
import { faArrowDown, faArrowRight, faChevronDown, faChevronRight, faEllipsis, faLeftRight, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { PopoverModule } from 'primeng/popover';
import { Router } from '@angular/router';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import { ITableAction } from '@lib/core/interfaces/data/table/table-action.interface';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';
import { Button } from '../../../../atoms/buttons/button/button';
import { TableCell } from '../../../../atoms/data/table/table-cell/table-cell';
import { DataActionHelper } from '@lib/core/helpers/data-action.helper';
import { DataAction } from '../../data-action/data-action';
import { TableModule } from 'primeng/table';
import { IconFa } from "../../../../atoms/other/icon-fa/icon-fa";

@Component({
  selector: 'tr[app-table-row]',
  imports: [Button, PopoverModule, TableCell, DataAction, TableModule, IconFa],
  templateUrl: './table-row.html',
  styleUrl: './table-row.scss',
})
export class TableRow<T> {
  route = inject(Router);
  data = input.required<T>();
  columns = input.required<IColumn<T>[]>();
  actions = input<ITableAction<T>[]>([]);
  actionMode = input<ActionMode>('buttons');
  onAction = output<ICellEvent<T>>();
  expandableRows = input(false);
  isExpanded = input(false);

  cellEvents = signal<Map<string, ICellEvent<T>>>(new Map());
  
  expandedIcon = computed(() => (this.isExpanded() ? faChevronDown : faChevronRight));

  actionsHelper = new DataActionHelper<T>(this.data, this.route, this.cellEvents);

  handleAction(action: ITableAction<T>) {
    const event = this.actionsHelper.handleAction(action);
    if (event) {
      this.onAction.emit(event);
    }
  }
}
