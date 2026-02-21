import { Component, input, model } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  template: '',
})
export abstract class BaseField {
  label = input<string>();
  placeholder = input<string>('');
  help = input<string>();
  showRequired = input<boolean>(true);
  field = input<string | undefined>(undefined);
  loading = input<boolean>(false);
  inputClass = input<string>('');
  icon = input<IconDefinition | undefined>(undefined);

  constructor() {}
}
