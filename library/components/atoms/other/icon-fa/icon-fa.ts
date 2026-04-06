import { Component, input, output } from '@angular/core';
import { ColorType } from '@core/types/color.type';
import { IconDefinition as definitionV2, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition as icon3, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-icon-fa',
  imports: [FaIconComponent, Ripple],
  templateUrl: './icon-fa.html',
  styleUrl: './icon-fa.scss',
})
export class IconFa {
  icon = input<IconDefinition | definitionV2 | icon3 | null | undefined>(null);
  color = input<ColorType | undefined>('transparent');
  enableRipple = input<boolean>(false);
  customColor = input<string>('');
  customClass = input<string>('');
  size = input<'xs' | 'sm' | 'lg' | 'xl' | ''>('');
  onClick = output<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
