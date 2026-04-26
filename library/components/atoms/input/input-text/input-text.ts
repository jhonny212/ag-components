import { Component, input, OnDestroy, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { BaseInputField } from 'src/app/shared/library/base';
import { Input } from '../input/input';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-input-text',
  imports: [InputTextModule, ReactiveFormsModule, FormsModule, Input],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
})
export class InputText extends BaseInputField<string> implements OnDestroy {
  type = input<'text' | 'email' | 'password'>('text');
  debounceTime = input<number>(0);
  minTextLength = input<number>(1);
  acceptEmptyString = input<boolean>(true);

  private debounceTimer: any;

  onInputChange(value: string) {
    const delay = this.debounceTime();
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    if (!delay || delay <= 0) {
      this.applyValue(value);
      return;
    }
    this.debounceTimer = setTimeout(() => {
      this.applyValue(value);
    }, delay);
  }

  private applyValue(value: string) {
    if ((value?.length || 0) >= this.minTextLength()) {
      this.value.set(value);
    } else if (
      (value === '' || value === null || value === undefined) &&
      this.acceptEmptyString()
    ) {
      this.value.set('');
    }
  }

  ngOnDestroy() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
  }
}
