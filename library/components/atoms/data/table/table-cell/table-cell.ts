import { Component, computed, input } from '@angular/core';
import { IColumn } from '@lib/core/interfaces/data/table/column.interface';
import { CellComponent } from '../../cell-component/cell-component';

@Component({
  selector: 'app-table-cell',
  imports: [CellComponent],
  templateUrl: './table-cell.html',
  styleUrl: './table-cell.scss',
})
export class TableCell<T> {
  column = input.required<IColumn<T>>();
  rowValue = input.required<any>();

  value = computed(() => {
    if (this.column().data.format) {
      return this.column().data.format!(this.rowValue());
    }
    const field = this.column().data.field;
    return field ? this.rowValue()[field] : '';
  });

  isComponent = computed(() => !!this.column().data.component);
}
