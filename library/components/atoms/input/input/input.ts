import { Component, input } from '@angular/core';
import type { ValidationError } from '@angular/forms/signals';
import { BaseField } from 'src/app/shared/library/base';
import { InputLabel } from '../../other/input-label/input-label';
import { InputErrors } from '../../other/input-errors/input-errors';

@Component({
  selector: 'app-input',
  imports: [InputLabel, InputErrors],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input<T> extends BaseField {
  hasRequired = input<boolean>(false);
  touched = input<boolean>(false);
  invalid = input<boolean>(false);
  errors = input<readonly ValidationError.WithOptionalField[]>([]);
}
