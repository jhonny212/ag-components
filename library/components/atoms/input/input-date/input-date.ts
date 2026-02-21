import { Component, input } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { Input } from '../input/input';
import { BaseInputField } from 'src/app/shared/library/base';

@Component({
  selector: 'app-input-date',
  imports: [DatePickerModule, FormsModule, Input],
  templateUrl: './input-date.html',
  styleUrl: './input-date.scss',
})
export class InputDate extends BaseInputField<Date | Date[]> {
  selectionMode = input<'single' | 'multiple' | 'range' | undefined>('single');
}
