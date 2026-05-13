import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-input-file-drop-zone',
  templateUrl: './input-file-drop-zone.html',
  styleUrl: './input-file-drop-zone.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFileDropZone {
  accept = input<string>('*/*');
  disabled = input<boolean>(false);
  multiple = input<boolean>(false);
  title = input<string>('Arrastra y suelta el archivo aquí');
  hint = input<string>('o haz clic para seleccionarlo');

  openPickerRequested = output<void>();
  filesDropped = output<File[]>();

  private dragDepth = signal(0);

  isDragging = computed(() => this.dragDepth() > 0 && !this.disabled());
  acceptLabel = computed(() => {
    const accept = this.accept().trim();
    return accept === '*/*' ? '' : accept;
  });

  onActivate(event: Event) {
    event.preventDefault();

    if (this.disabled()) {
      return;
    }

    this.openPickerRequested.emit();
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.onActivate(event);
    }
  }

  onDragEnter(event: DragEvent) {
    if (this.disabled()) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.dragDepth.update((value) => value + 1);
  }

  onDragOver(event: DragEvent) {
    if (this.disabled()) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'copy';
    }
  }

  onDragLeave(event: DragEvent) {
    if (this.disabled()) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.dragDepth.update((value) => Math.max(0, value - 1));
  }

  onDrop(event: DragEvent) {
    if (this.disabled()) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.dragDepth.set(0);

    const files = this.extractFiles(event);
    if (files.length > 0) {
      this.filesDropped.emit(files);
    }
  }

  private extractFiles(event: DragEvent): File[] {
    const files = event.dataTransfer?.files;
    return files ? Array.from(files) : [];
  }
}