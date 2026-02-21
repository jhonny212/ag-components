import { Component, computed, input } from '@angular/core';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';

@Component({
  selector: 'app-grid-cell',
  imports: [],
  templateUrl: './grid-cell.html',
  styleUrl: './grid-cell.scss',
})
export class GridCell<T> {
  column = input.required<IColumn<T>>();
  rowValue = input.required<T>();
  isLast = input.required<boolean>();

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
}
