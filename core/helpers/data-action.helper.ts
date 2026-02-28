import { Router } from '@angular/router';
import { ITableAction } from '../interfaces/data/table/table-action.interface';
import { ICellEvent } from '../interfaces/data/table/table-event.interface';
import { EventEmitter, InputSignal, WritableSignal } from '@angular/core';
import { updateMap } from '../utils/map.util';

export class DataActionHelper<T> {
  constructor(
    private data: InputSignal<T>,
    private route: Router,
    private cellEvents: WritableSignal<Map<string, ICellEvent<T>>>,
  ) {}

  handleAction(action: ITableAction<T>): ICellEvent<T> | null {
    if (action.routerLink) {
      const params = action.paramsRender ? action.paramsRender(this.data()) : [];
      this.route.navigate([action.routerLink, ...params]);
      return null;
    } else if (!this.cellEvents().has(action.triggerAction)) {
      const event = {
        data: this.data(),
        columnKey: 'action' as keyof T,
        action,
      };
      updateMap(this.cellEvents, action.triggerAction, event);
      return event;
    } else {
      const event = this.cellEvents().get(action.triggerAction)!;
      return event;
    }
  }
}
