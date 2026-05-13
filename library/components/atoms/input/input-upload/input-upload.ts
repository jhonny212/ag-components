import { Component, input, output } from '@angular/core';
import {
  FileSelectEvent,
  FileUpload,
  FileUploadEvent,
  FileUploadHandlerEvent,
} from 'primeng/fileupload';
import { EmptyMessage } from '../../messages/empty-message/empty-message';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { IFileUpload } from '@lib/core/interfaces/file/file-upload.interface';

@Component({
  selector: 'app-input-upload',
  imports: [FileUpload, EmptyMessage],
  templateUrl: './input-upload.html',
  styleUrl: './input-upload.scss',
})
export class InputUpload {
  accept = input<string>('*/*');
  multiple = input<boolean>(false);
  maxFiles = input<number | null>(1);
  custom = input<boolean>(true);
  showUploadButton = input<boolean>(true);
  icon = faFileUpload;

  onUploadCustom = output<IFileUpload>();
  onUpload = output<FileUploadEvent>();
  onSelect = output<FileSelectEvent>();

  handleUpload(event: FileUploadHandlerEvent, fileUpload: FileUpload): void {
    if (this.custom()) {
      this.onUploadCustom.emit({ event, fileUpload, clear: () => this.clear(fileUpload) });
    }
  }

  private clear(fileUpload: FileUpload): void {
    fileUpload.files = [];
    fileUpload.uploadedFileCount = 0;
    fileUpload.clear();
  }
}
