import { Component, input } from '@angular/core';
import { IconFa } from "../icon-fa/icon-fa";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ColorType } from '@lib/core/types/color.type';
import { Ripple } from "primeng/ripple";
import { VariantType } from '@lib/core/types/variant.type';

@Component({
  selector: 'app-card-icon',
  imports: [IconFa, Ripple],
  templateUrl: './card-icon.html',
  styleUrl: './card-icon.scss',
})
export class CardIcon {
  icon = input<IconDefinition | null>(null);
  color = input<ColorType>('neutral');
  variant = input<VariantType | null>(null);
}
