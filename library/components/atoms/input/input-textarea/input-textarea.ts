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
  cols = input<number>(2);
  autoResize = input<boolean>(false);
  resize = input<'none' | 'both' | 'horizontal' | 'vertical'>('vertical');

}
