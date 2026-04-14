import { Resource } from '@angular/core';
import { IPagedResponse, IResponse } from './response.interface';

export interface IResponseResource<T> extends Resource<IResponse<T> | undefined> {}

export interface IPagedResource<T> extends Resource<IPagedResponse<T> | undefined> {}
