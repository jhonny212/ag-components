import { Component, input, output } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, FontAwesomeModule, RippleModule, Tooltip],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  icon = input<IconDefinition>();
  label = input<string>();
  severity = input<ButtonSeverity>();
  class = input<string>();
  loading = input<boolean | undefined>(false);
  disable = input<boolean>(false);
  rounded = input<boolean>(false);

  tooltip = input<string | undefined>(undefined);

  onClick = output<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
