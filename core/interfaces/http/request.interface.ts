import { SortType } from '../../types/sort.type';

export interface IBasePagedRequest {
  pageSize?: number;
  page?: number;
  sortColumn?: string;
  sortOrder?: SortType;
  isDescending?: boolean;
}

export interface ISearchRequest extends IBasePagedRequest {
  searchTerm?: string;
}

export interface IGetByIdRequest<T> extends IBasePagedRequest {
  id: number | string;
}
