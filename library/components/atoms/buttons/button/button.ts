import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { SizeType } from '@lib/core/types/size.type';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import { IconFa } from '../../other/icon-fa/icon-fa';
import { VariantType } from '@lib/core/types/variant.type';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, FontAwesomeModule, Tooltip, IconFa],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  variant = input<VariantType>('normal');

  onClick = output<Event>();

  handleClick(event: Event) {
    if (this.disable() || this.loading()) {
      event.preventDefault();
      return;
    }

    this.onClick.emit(event);
  }
}
