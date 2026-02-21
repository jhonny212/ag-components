import { Component, computed, input, output } from '@angular/core';
import { ColorType } from '@core/types/color.type';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CardModule } from 'primeng/card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card',
  imports: [CardModule, FaIconComponent],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  title = input<string | undefined>('');
  subTitle = input<string | undefined>('');
  loading = input<boolean>(false);
  isClickable = input<boolean>(false);
  color = input<ColorType>();
  icon = input<IconDefinition>();
  customColor = input<string | undefined>('');

  onClick = output<void>();

  cardTitle = computed(() => {
    if (this.icon()) return '';
    return this.title();
  });

  handleClick(): void {
    this.onClick.emit();
  }
}
