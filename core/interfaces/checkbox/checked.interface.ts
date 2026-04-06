import { ModelSignal, signal, WritableSignal } from '@angular/core';
export interface IChecked {
  checked: WritableSignal<boolean | null>;
}
