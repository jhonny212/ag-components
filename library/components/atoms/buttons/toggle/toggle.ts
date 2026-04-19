import { Component } from '@angular/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Input } from '../../input/input/input';
import { BaseInputField } from '../../../../base';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-toggle',
  imports: [ToggleSwitchModule, ReactiveFormsModule, FormsModule, Input, Skeleton],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class Toggle extends BaseInputField<boolean> {
  onInputChange(value: boolean) {
    this.handleChange(value);
  }
}
