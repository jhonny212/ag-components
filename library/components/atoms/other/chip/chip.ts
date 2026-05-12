import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { VariantType } from '@lib/core/types/variant.type';
import { ColorType } from '@lib/core/types/color.type';
import { SizeType } from '@lib/core/types/size.type';
import { Ripple } from 'primeng/ripple';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chip',
  imports: [Ripple],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chip {
  label = input<string | number | undefined>('');
  severity = input<ColorType>('primary');
  variant = input<VariantType>('normal');
  size = input<SizeType>('medium');
  customClass = input<string>('');
  icon = input<IconDefinition | null>(null);

  onClick = output<void>();

  handleClick(event: MouseEvent): void {
    this.onClick.emit();
  }
}
