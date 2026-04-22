import { ChangeDetectionStrategy, Component, TemplateRef, computed, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ButtonSeverity } from 'primeng/button';
import { VariantType } from '@lib/core/types/variant.type';
import { ColorType } from '@lib/core/types/color.type';
import { SizeType } from '@lib/core/types/size.type';
import { Ripple } from "primeng/ripple";

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
}
