import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-input-file-selected-files',
  templateUrl: './input-file-selected-files.html',
  styleUrl: './input-file-selected-files.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFileSelectedFiles {
  files = input<readonly File[]>([]);
}