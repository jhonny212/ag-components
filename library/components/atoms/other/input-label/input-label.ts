import { Component, input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IconFa } from '../icon-fa/icon-fa';

@Component({
  selector: 'app-input-label',
  imports: [IconFa],
  templateUrl: './input-label.html',
  styleUrl: './input-label.scss',
})
export class InputLabel {
  label = input<string>();
  field = input<string>();
  hasRequired = input<boolean>(false);
  icon = input<IconDefinition>();
}
