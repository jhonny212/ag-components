import { Signal, WritableSignal } from '@angular/core';

export interface IBaseResponse {
  success: boolean;
  message: string;
  loading?: boolean;
}

export interface IResponse<T> extends IBaseResponse {
  data: T;
}

export interface IPagedResponse<T> extends IBaseResponse {
  data: T[];
  pageSize: number;
  pageCount: number;
  pageNumber: number;
  success: boolean;
  totalRecords: number;
}

export interface IErrorResponse {
  success: boolean;
  message: string[] | string;
  errors?: Record<string, string[]>;
}

export interface IFileResponse extends IResponse<Blob> {
  filename: string;
}
