import { SortType } from '@lib/core/types/sort.type';
import { IPagination } from './pagination.interface';

export interface IDataSourceFilter<T> {
  pagination: IPagination;
  searchTerm: string;
  sortColumn?: keyof T;
  sortDirection: SortType;
}
