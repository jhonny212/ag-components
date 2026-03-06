import { Component, input } from '@angular/core';
import { faTable, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-empty-message',
  imports: [FaIconComponent],
  templateUrl: './empty-message.html',
  styleUrl: './empty-message.scss',
})
export class EmptyMessage {
  icon = input<IconDefinition>(faTable);
  title = input<string>('No hay datos disponibles');
  message = input<string>('No hay datos disponibles');
}
