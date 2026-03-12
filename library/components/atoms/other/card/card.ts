import { Component, computed, input, output } from '@angular/core';
import { ColorType } from '@core/types/color.type';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { Ripple } from 'primeng/ripple';
import { IconFa } from '../icon-fa/icon-fa';

@Component({
  selector: 'app-card',
  imports: [CardModule, SkeletonModule, Ripple, IconFa],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  title = input<string | undefined>('');
  subTitle = input<string | undefined>('');
  loading = input<boolean | undefined>(false);
  isClickable = input<boolean>(false);
  color = input<ColorType>('light');
  icon = input<IconDefinition>();
  customColor = input<string | undefined>('');
  enableRipple = input<boolean>(false);

  onClick = output<void>();

  cardTitle = computed(() => {
    if (this.icon()) return '';
    return this.title();
  });

  handleClick(): void {
    this.onClick.emit();
  }
}
