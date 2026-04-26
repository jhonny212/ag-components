import { Component, computed, input } from '@angular/core';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { BaseInputField } from 'src/app/shared/library/base/base-components/base-input-field';
import { Input } from '../../input/input/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Skeleton } from 'primeng/skeleton';
import { ColorType } from '@lib/core/types/color.type';
import { Ripple } from 'primeng/ripple';
import { VariantType } from '@lib/core/types/variant.type';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toggle-btn',
  imports: [ToggleButtonModule, Input, ReactiveFormsModule, FormsModule, Skeleton, Ripple, NgClass],
  templateUrl: './toggle-btn.html',
  styleUrl: './toggle-btn.scss',
})
export class ToggleBtn extends BaseInputField<boolean> {
  onLabel = input.required<string>();
  offLabel = input.required<string>();
  onColor = input<ColorType>('primary');
  offColor = input<ColorType>('neutral');
  color = input<ColorType>('neutral');
  variant = input<VariantType>();
  disableOff = input<boolean>(false);
  disableOn = input<boolean>(false);

  disabled = computed(() => {
    if (!this.value() && this.disableOn()) {
      return true;
    }
    if (this.value() && this.disableOff()) {
      return true;
    }
    return false;
  });

  currentColor = computed(() => {
    const isActive = this.value();
    if (isActive && this.onColor()) {
      return this.onColor();
    }
    if (!isActive && this.offColor()) {
      return this.offColor();
    }
    return this.color();
  });
}
