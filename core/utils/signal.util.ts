import { signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResponseHelper } from '@lib/core/helpers/response.helper';
import { IPagedResponse } from '@lib/core/interfaces/http/response.interface';
import { from, map } from 'rxjs';

export const pagedResponseSignal = <T>(
  response: Promise<IPagedResponse<T>>,
): Signal<IPagedResponse<T>> => {
  return toSignal(from(response).pipe(map((response) => response)), {
    initialValue: {
      ...ResponseHelper.toEmptyPagedResponse<T>(),
      loading: true,
    },
  });
};

export const emptyPagedSignal = <T>() =>
  signal<IPagedResponse<T>>(ResponseHelper.toEmptyPagedResponse<T>());
