import { signal } from '@angular/core';
import { IPagedResponse, IResponse } from '../interfaces/http/response.interface';

export class ResponseHelper {
  public static toEmptyPagedResponse<T>(): IPagedResponse<T> {
    return {
      data: [],
      totalRecords: 0,
      message: '',
      success: true,
      pageCount: 0,
      pageNumber: 0,
      pageSize: 0,
      loading: false,
    };
  }

  public static toEmptyResponse(success = false): IResponse<string> {
    return {
      data: '',
      message: '',
      success: success,
    };
  }
}
