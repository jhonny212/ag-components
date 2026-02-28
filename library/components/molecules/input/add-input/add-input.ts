import { Component, input, model, output } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { BaseField } from 'src/app/shared/library/base';
import { Button } from '../../../atoms/buttons/button/button';
import { InputText } from '../../../atoms/input/input-text/input-text';

@Component({
  selector: 'app-add-input',
  imports: [Button, InputText],
  templateUrl: './add-input.html',
  styleUrl: './add-input.scss',
})
export class AddInput extends BaseField {
  value = model.required<string>();

  onAdd = output<void>();

  addIcon = faAdd;

  handleAdd(): void {
    this.onAdd.emit();
  }
}
