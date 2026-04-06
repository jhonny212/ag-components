import { InputSignal, OutputEmitterRef, Type } from '@angular/core';
import { Button } from '../../library/components/atoms/buttons/button/button';
import { Input } from '../../library/components/atoms/input/input/input';
import { Checkbox } from '../../library/components/atoms/input/checkbox/checkbox';

export type TypeDataCell =
  | 'checkbox'
  | 'tag'
  | 'text'
  | 'avatar'
  | 'expand'
  | 'status'
  | 'button'
  | 'full-button'
  | 'input-text'
  | 'input-number'
  | 'select';

type ExtractOutputs<T> = {
  [K in keyof T as T[K] extends OutputEmitterRef<any> ? K : never]?: T[K] extends OutputEmitterRef<
    infer V
  >
    ? (value: V) => void
    : never;
};

type ExtractInputs<T> = {
  [K in keyof T as T[K] extends InputSignal<any> ? K : never]?: T[K] extends InputSignal<infer V>
    ? V
    : never;
};

export type DynamicComponent<T> = {
  component: Type<T>;
  inputs?: ExtractInputs<T>;
  outputs?: ExtractOutputs<T>;
};

export type ButtonComponent = DynamicComponent<Button>;
export type InputComponent = DynamicComponent<Input<string | number>>;
export type CheckboxComponent = DynamicComponent<Checkbox>;

export type CellComponent = ButtonComponent | InputComponent | CheckboxComponent;
