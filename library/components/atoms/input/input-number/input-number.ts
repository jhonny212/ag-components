import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Input } from '../input/input';
import { BaseInputField } from 'src/app/shared/library/base';

@Component({
  selector: 'app-input-number',
  imports: [InputNumberModule, FormsModule, Input],
  templateUrl: './input-number.html',
  styleUrl: './input-number.scss',
})
export class InputNumber extends BaseInputField<number> {
  mode = input<'decimal' | 'currency' | undefined>(undefined);

  onInputChange(value: number | null) {
    this.value.set(value);
  }
}
