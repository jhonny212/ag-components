import { Component, input, model, output } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { BaseField } from 'src/app/shared/library/base';
import { Button, InputText } from '../../../atoms';

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
