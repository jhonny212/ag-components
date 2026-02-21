import { Component, input, output } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, FontAwesomeModule, RippleModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  icon = input<IconDefinition>();
  label = input<string>();
  severity = input<ButtonSeverity>();
  class = input<string>();
  loading = input<boolean>(false);
  disable = input<boolean>(false);
  rounded = input<boolean>(false);

  onClick = output<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
