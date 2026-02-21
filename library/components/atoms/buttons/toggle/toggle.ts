import { Component } from '@angular/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Input } from '../../input/input/input';
import { BaseInputField } from '../../../../base';

@Component({
  selector: 'app-toggle',
  imports: [ToggleSwitchModule, ReactiveFormsModule, FormsModule, Input],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class Toggle extends BaseInputField<boolean> {
  onInputChange(value: boolean) {
    this.value.set(value);
  }
}
