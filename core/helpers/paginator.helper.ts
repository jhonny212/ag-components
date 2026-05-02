import { IPagination } from '@lib/core/interfaces/data/pagination.interface';
import { IBasePagedRequest } from '../../../core/interfaces/http/request.interface';
import { IDataSourceFilter } from '@lib/core/interfaces/data/data-source-filter.interface';

export class PaginatorHelper {
  static getDefaultPagination(): IPagination {
    return {
      page: 0,
      pageSize: 10,
    };
  }

  static toEmptyPagination(): IPagination {
    return {
      page: 0,
      pageSize: 0,
    };
  }

  static toBasePagedRequest(event: IDataSourceFilter<any>): IBasePagedRequest {
    return {
      page: event.pagination.page + 1,
      pageSize: event.pagination.pageSize,
      sortOrder: event.sortOrder,
      sortColumn: event.sortColumn as any,
      isDescending: event.sortOrder === 'DESC',
    };
  }

  static toDefaultDataSourceFilter<T>(): IDataSourceFilter<T> {
    return {
      pagination: this.getDefaultPagination(),
      sortOrder: 'ASC',
      searchTerm: '',
    };
  }
}
