import { Component, computed, input, output } from '@angular/core';
import { ColorType } from '@lib/core/types/color.type';
import { faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { Ripple } from 'primeng/ripple';
import { IconFa } from '../icon-fa/icon-fa';
import { Button } from "../../buttons/button/button";

@Component({
  selector: 'app-card',
  imports: [CardModule, SkeletonModule, Ripple, IconFa, Button],
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
  showClose = input<boolean>(false);

  closeIcon = faClose

  onClick = output<void>();
  onClose = output<void>();

  cardTitle = computed(() => {
    if (this.icon()) return '';
    return this.title();
  });

  handleClick(): void {
    this.onClick.emit();
  }

  handleClose(): void {
    this.onClose.emit();
  }
}
