import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-upload-item',
  imports: [],
  templateUrl: './input-upload-item.html',
  styleUrl: './input-upload-item.scss',
})
export class InputUploadItem {
  file = input<File | null>(null);

  constructor() {
  }
}
