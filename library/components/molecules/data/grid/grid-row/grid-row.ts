import { Component, inject, input, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { faEllipsis, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Popover } from 'primeng/popover';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Button, GridCell } from '../../../../atoms';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';
import { ITableAction } from '@lib/core/interfaces/data/table/table-action.interface';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';

@Component({
  selector: 'app-grid-row',
  imports: [GridCell, Button, Popover, FaIconComponent],
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

  handleAction(action: ITableAction<T>) {
    if (action.routerLink) {
      const params = action.paramsRender ? action.paramsRender(this.data()) : [];
      this.route.navigate([action.routerLink, ...params]);
    } else if (!this.cellEvents().has(action.triggerAction)) {
      const event = {
        data: this.data(),
        columnKey: 'action' as keyof T,
        action,
      };
      this.addCellEvent(action.triggerAction, event);
      this.onAction.emit(event);
    } else {
      const event = this.cellEvents().get(action.triggerAction)!;
      this.onAction.emit(event);
    }
  }

  private addCellEvent(key: string, event: ICellEvent<T>) {
    this.cellEvents.update((current) => {
      const newMap = new Map(current);
      newMap.set(key, event);
      return newMap;
    });
  }
}
