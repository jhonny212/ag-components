import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseInputField } from 'src/app/shared/library/base';
import { Input } from '../input/input';

@Component({
  selector: 'app-input-textarea',
  imports: [FormsModule, Input],
  templateUrl: './input-textarea.html',
  styleUrl: './input-textarea.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextarea extends BaseInputField<string> {
  rows = input<number>(4);
  cols = input<number | undefined>(undefined);
  maxLength = input<number | null>(null);
  autoResize = input<boolean>(false);
  resize = input<'none' | 'both' | 'horizontal' | 'vertical'>('vertical');

  textChanged = output<string>();

  onInputChange(value: string) {
    this.value.set(value);
    this.handleChange(value);
    this.textChanged.emit(value);
  }
}
