import { Component, input, output } from '@angular/core';
import { ColorType } from '@lib/core/types/color.type';
import { IconDefinition as definitionV2, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition as icon3, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Ripple } from 'primeng/ripple';
import { SizeType } from '@lib/core/types/size.type';

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
  size = input<SizeType>('medium');
  
  customColor = input<string>('');
  customClass = input<string>('');
  onClick = output<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
