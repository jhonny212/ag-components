import { Component, input } from '@angular/core';
import type { ValidationError, DisabledReason } from '@angular/forms/signals';

@Component({
  selector: 'app-input-errors',
  imports: [],
  templateUrl: './input-errors.html',
  styleUrl: './input-errors.scss',
})
export class InputErrors {
  errors = input<readonly ValidationError.WithOptionalField[]>([]);
  hasRequired = input<boolean>(false);
}
