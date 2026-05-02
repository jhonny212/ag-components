import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  input,
  output,
  viewChild,
} from '@angular/core';
import { BaseInputField } from 'src/app/shared/library/base';
import { Button } from '../../buttons/button/button';
import { Input } from '../input/input';

@Component({
  selector: 'app-input-file',
  imports: [Input, Button],
  templateUrl: './input-file.html',
  styleUrl: './input-file.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFile extends BaseInputField<File[]> {
  accept = input<string>('*/*');
  multiple = input<boolean>(false);
  maxFiles = input<number | null>(null);

  selectButtonLabel = input<string>('Seleccionar archivo');
  uploadButtonLabel = input<string>('Subir');
  clearButtonLabel = input<string>('Limpiar');

  showUploadButton = input<boolean>(true);
  showClearButton = input<boolean>(true);

  filesSelected = output<File[]>();
  uploadRequested = output<File[]>();
  filesCleared = output<void>();

  fileInputRef = viewChild<ElementRef<HTMLInputElement>>('fileInput');

  selectedFiles = computed(() => this.value() ?? []);
  hasFiles = computed(() => this.selectedFiles().length > 0);

  onOpenFilePicker() {
    if (this.disabledComponent()) {
      return;
    }

    this.fileInputRef()?.nativeElement.click();
  }

  onFileInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files ? Array.from(inputElement.files) : [];

    const maxFiles = this.maxFiles();
    const normalizedFiles =
      maxFiles && maxFiles > 0 ? files.slice(0, maxFiles) : files;

    this.value.set(normalizedFiles);
    this.touched.set(true);
    this.filesSelected.emit(normalizedFiles);
  }

  onRequestUpload() {
    if (!this.hasFiles() || this.disabledComponent()) {
      return;
    }

    this.uploadRequested.emit(this.selectedFiles());
  }

  onClearFiles() {
    this.handleClear();
    const nativeInput = this.fileInputRef()?.nativeElement;
    if (nativeInput) {
      nativeInput.value = '';
    }
    this.filesCleared.emit();
  }
}
