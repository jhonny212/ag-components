import { Resource } from '@angular/core';
import { IPagedResponse } from './response.interface';

export interface IPagedResource<T> extends Resource<IPagedResponse<T> | undefined> {}
