import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { ITableAction } from '@lib/core/interfaces/data/table/table-action.interface';
import { Button } from '../../../atoms/buttons/button/button';

@Component({
  selector: 'app-data-toolbar',
  imports: [Button],
  templateUrl: './data-toolbar.html',
  styleUrl: './data-toolbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataToolbar<T> {
  actions = input<ITableAction<T>[]>([]);
  onAction = output<ITableAction<T>>();

  handleAction(action: ITableAction<T>): void {
    this.onAction.emit(action);
  }
}
