import { Component, inject, input, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { faEllipsis, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';
import { ITableAction } from '@lib/core/interfaces/data/table/table-action.interface';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import { Button } from '../../../../atoms/buttons/button/button';
import { GridCell } from '../../../../atoms/data/grid/grid-cell/grid-cell';
import { DataAction } from '../../data-action/data-action';
import { DataActionHelper } from '@lib/core/helpers/data-action.helper';

@Component({
  selector: 'app-grid-row',
  imports: [GridCell, DataAction],
  templateUrl: './grid-row.html',
  styleUrl: './grid-row.scss',
})
export class GridRow<T> {
  route = inject(Router);
  data = input.required<T>();
  columns = input.required<IColumn<T>[]>();
  actions = input<ITableAction<T>[]>([]);
  cellEvents = signal<Map<string, ICellEvent<T>>>(new Map());
  dotsIcon = faEllipsisV;

  onAction = output<ICellEvent<T>>();

  actionsHelper = new DataActionHelper<T>(this.data, this.route, this.cellEvents);

  handleAction(action: ITableAction<T>) {
    const event = this.actionsHelper.handleAction(action);
    if (event) {
      this.onAction.emit(event);
    }
  }
}
