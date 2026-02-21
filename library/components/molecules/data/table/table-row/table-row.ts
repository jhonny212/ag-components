import { Component, inject, input, output, signal } from '@angular/core';
import { ActionMode } from '@core/types/action-mode.type';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faDotCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { PopoverModule } from 'primeng/popover';
import { Router } from '@angular/router';
import { Button, TableCell } from 'src/app/shared/library/components/atoms';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import { ITableAction } from '@lib/core/interfaces/data/table/table-action.interface';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';

@Component({
  selector: 'tr[app-table-row]',
  imports: [Button, FaIconComponent, PopoverModule, TableCell],
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

  cellEvents = signal<Map<string, ICellEvent<T>>>(new Map());
  dotsIcon = faEllipsis;

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
