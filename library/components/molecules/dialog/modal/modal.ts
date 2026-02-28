import { Component, input, model } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal',
  imports: [DialogModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  visible = model<boolean>(false);
  title = input<string>();
  subTitle = input<string>();
  class = input<string>('default-modal');

  handleDialog(value: boolean) {
    this.visible.set(value);
  }
}
