export interface IBaseResponse {
  success: boolean;
  message: string[] | string;
}

export interface IPagedResponse<T> extends IBaseResponse {
  data: T[];
  pageSize: number;
  pageCount: number;
  page: number;
  success: boolean;
  message: string;
  total: number;
}

export interface IResponse<T> extends IBaseResponse {
  data: T;
}
