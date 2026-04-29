import { Component, input, output } from '@angular/core';
import { Button } from '../../../atoms/buttons/button/button';
import { faAdd, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-btn',
  imports: [Button],
  templateUrl: './input-btn.html',
  styleUrl: './input-btn.scss',
})
export class InputBtn {
  onBtn = output<void>();
  tooltip = input.required<string>();

  addIcon = input<IconDefinition>(faAdd);

  handleBtn(): void {
    this.onBtn.emit();
  }
}
