import { Component, computed, input, model, output } from '@angular/core';
import { Dropdown } from '../../../atoms/select/dropdown/dropdown';
import { Button } from '../../../atoms/buttons/button/button';
import { IDropdownOption } from '@lib/core/interfaces/select/dropdown-option.interface';
import { ITableAction } from '@lib/core/interfaces/data/table/table-action.interface';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';
import { faEllipsis, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '@core/util/general.util';

@Component({
  selector: 'app-data-action',
  imports: [Dropdown, Button],
  templateUrl: './data-action.html',
  styleUrl: './data-action.scss',
})
export class DataAction<T> {
  actions = input.required<ITableAction<T>[]>();
  cellEvents = input.required<Map<string, ICellEvent<T>>>();

  dotsIcon = input<IconDefinition>(faEllipsis);

  onAction = output<ITableAction<T>>();

  mappedActions = computed(() => {
    const dropdownOptions: IDropdownOption<ITableAction<T>>[] = this.actions().map((action) => {
      const option: IDropdownOption<ITableAction<T>> = {
        id: action.triggerAction,
        label: action.label!,
        value: action,
        icon: action.faIcon,
      };
      return option;
    });
    return dropdownOptions;
  });

  btnColor = computed(() => {
    return useDarkMode().isDark() ? 'help' : 'info';
  });

  handleAction(action: ITableAction<T>) {
    this.onAction.emit(action);
  }
}
