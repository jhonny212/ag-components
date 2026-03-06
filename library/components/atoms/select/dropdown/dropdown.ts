import { Component, effect, ElementRef, input, output, signal, viewChild } from '@angular/core';
import { IDropdownOption } from '@lib/core/interfaces/select/dropdown-option.interface';
import { Popover } from 'primeng/popover';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';
import { Ripple } from "primeng/ripple";

@Component({
  selector: 'app-dropdown',
  imports: [Popover, FaIconComponent, Ripple],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown<T> {
  trigger = viewChild<Popover>('trigger');

  options = input.required<IDropdownOption<T>[]>();
  events = input<Map<string, ICellEvent<any>> | undefined>(undefined);

  onOptionSelected = output<IDropdownOption<T>>();

  constructor() {
    effect(() => {
      const el = this.trigger();
    });
  }

  handleTriggerClick(hide: boolean, event?: Event) {
    if (hide) {
      this.trigger()?.hide();
    } else {
      this.trigger()?.toggle(event);
    }
  }

  handleOptionSelected(option: IDropdownOption<T>) {
    this.handleTriggerClick(true);
    this.onOptionSelected.emit(option);
  }
}
