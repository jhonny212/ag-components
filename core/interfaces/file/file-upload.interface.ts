import { FileUpload, FileUploadHandlerEvent } from 'primeng/fileupload';

export interface IFileUpload {
  event: FileUploadHandlerEvent;
  fileUpload: FileUpload;
  clear(): void;
}
