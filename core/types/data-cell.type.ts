import { InputSignal, OutputEmitterRef, Type } from '@angular/core';
import { Button } from '../../library/components/atoms/buttons/button/button';
import { Input } from '../../library/components/atoms/input/input/input';
import { Checkbox } from '../../library/components/atoms/input/checkbox/checkbox';
import { Toggle } from '../../library/components/atoms/buttons/toggle/toggle';
import { Select } from '../../library/components/atoms/select/select/select';
import { InputNumber } from '../../library/components/atoms/input/input-number/input-number';
import { Chip } from '../../library/components/atoms/other/chip/chip';
import { ToggleBtn } from '../../library/components/atoms/buttons/toggle-btn/toggle-btn';

export type TypeDataCell =
  | 'checkbox'
  | 'button'
  | 'toggle'
  | 'select'
  | 'input-number'
  | 'chip'
  | 'toggle-btn';

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
export type InputTextComponent = DynamicComponent<Input<string>>;
export type CheckboxComponent = DynamicComponent<Checkbox>;
export type ToggleComponent = DynamicComponent<Toggle>;
export type SelectComponent<T> = DynamicComponent<Select<T>>;
export type InputNumberComponent = DynamicComponent<InputNumber>;
export type ChipComponent = DynamicComponent<Chip>;
export type ToggleBtnComponent = DynamicComponent<ToggleBtn>;

export type CellComponent<T = any> =
  | ButtonComponent
  | InputTextComponent
  | CheckboxComponent
  | ToggleComponent
  | SelectComponent<T>
  | InputNumberComponent
  | ChipComponent
  | ToggleBtnComponent;
