import { Component, input, model, output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PositionType } from '@lib/core/types/position.type';

@Component({
  template: '',
})
export abstract class BaseField {
  label = input<string>();
  labelPosition = input<PositionType>('top');
  placeholder = input<string>('');
  help = input<string>();
  showRequired = input<boolean>(true);
  field = input<string | undefined>(undefined);
  loading = input<boolean>(false);
  inputClass = input<string>('');
  icon = input<IconDefinition | undefined>(undefined);

  onClick = output<Event>();
  onValueChange = output<any>();

  constructor() {}

  handleClick(event: Event) {
    this.onClick.emit(event);
  }

  handleValueChange(value: any) {
    this.onValueChange.emit(value);
  }
}
