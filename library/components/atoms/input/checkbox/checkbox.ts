import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorType } from '@core/types/color.type';
import { SizeType } from '@lib/core/types/size.type';
import { BaseInputField } from 'src/app/shared/library/base';
import { Input } from '../input/input';

@Component({
  selector: 'app-checkbox',
  imports: [FormsModule, Input],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Checkbox extends BaseInputField<boolean> {
  color = input<ColorType>('primary');
  size = input<SizeType>('medium');
  disabled = input<boolean>(false);

  checkboxClass = computed(() => `ck-checkbox ${this.color()} ${this.size()} ${this.inputClass()}`.trim());

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.handleChange(target?.checked ?? false);
  }
}
