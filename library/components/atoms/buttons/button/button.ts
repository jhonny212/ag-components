import { Component, input, output } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { SizeType } from '@lib/core/types/size.type';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import { IconFa } from '../../other/icon-fa/icon-fa';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, FontAwesomeModule, Tooltip, IconFa],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  icon = input<IconDefinition>();
  label = input<string>();
  severity = input<ButtonSeverity>('primary');
  loading = input<boolean | undefined>(false);
  disable = input<boolean>(false);
  rounded = input<boolean>(false);
  size = input<SizeType>('medium');
  customClass = input<string>();
  tooltip = input<string | undefined>(undefined);

  onClick = output<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
