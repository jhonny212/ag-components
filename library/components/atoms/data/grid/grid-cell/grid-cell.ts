import { Component, computed, input, output } from '@angular/core';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import { CellComponent } from '../../cell-component/cell-component';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';

@Component({
  selector: 'app-grid-cell',
  imports: [CellComponent],
  templateUrl: './grid-cell.html',
  styleUrl: './grid-cell.scss',
})
export class GridCell<T> {
  column = input.required<IColumn<T>>();
  rowValue = input.required<T>();
  isLast = input.required<boolean>();

  componentCellEvent = output<ICellEvent<T>>();

  value = computed(() => {
    if (this.column().data.format) {
      return this.column().data.format!(this.rowValue());
    }
    const field = this.column().data.field;
    return field ? this.rowValue()[field] : '';
  });

  header = computed(() => {
    return this.column().header?.format
      ? this.column().header?.format!()
      : this.column().header?.label || '';
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
