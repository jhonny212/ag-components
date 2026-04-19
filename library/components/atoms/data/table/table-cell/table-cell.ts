import { Component, computed, input, output } from '@angular/core';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import { CellComponent } from '../../cell-component/cell-component';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';

@Component({
  selector: 'app-table-cell',
  imports: [CellComponent],
  templateUrl: './table-cell.html',
  styleUrl: './table-cell.scss',
})
export class TableCell<T> {
  column = input.required<IColumn<T>>();
  rowValue = input.required<any>();

  componentCellEvent = output<ICellEvent<T>>();

  value = computed(() => {
    if (this.column().data.format) {
      return this.column().data.format!(this.rowValue());
    }
    const field = this.column().data.field;
    return field ? this.rowValue()[field] : '';
  });

  isComponent = computed(() => {
    const hasComponent = !!this.column().data.component;
    if (hasComponent) {
      const canRender = this.column().data.canRenderComponent;
      if (canRender) {
        return canRender(this.rowValue());
      }
      return true;
    }
    return hasComponent;
  });

  handleComponentEvent(event: ICellEvent<T>) {
    this.componentCellEvent.emit(event);
  }
}
