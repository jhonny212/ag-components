import { Component, computed, effect, input, model, OnDestroy, output } from '@angular/core';
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
  minTextLength = input<number>(3);

  valueChange = output<string>();

  private inputSubject = new Subject<string>();
  private subscription?: Subscription;

  constructor() {
    super();
    const value$ = toObservable(this.value);
    this.subscription = value$
      .pipe(debounceTime(this.debounceTime()), distinctUntilChanged())
      .subscribe((val) => {
        if ((val?.length || 0) >= this.minTextLength()) {
          this.valueChange.emit(val || '');
        } else if (val === '' || val === null || val === undefined) {
          this.valueChange.emit('');
        }
      });
  }

  onInputChange(value: string) {
    this.value.set(value);
    if (this.debounceTime()) {
      this.inputSubject.next(value);
    } else {
      this.valueChange.emit(value);
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.inputSubject.complete();
  }
}
