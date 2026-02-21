import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-label',
  imports: [FaIconComponent],
  templateUrl: './input-label.html',
  styleUrl: './input-label.scss',
})
export class InputLabel {
  label = input<string>();
  field = input<string>();
  hasRequired = input<boolean>(false);
  icon = input<IconDefinition>();
}
