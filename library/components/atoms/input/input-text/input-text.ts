import { Component, computed, effect, input, model, OnDestroy, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { BaseInputField } from 'src/app/shared/library/base';
import { Input } from '../..';


@Component({
  selector: 'app-input-text',
  imports: [InputTextModule, ReactiveFormsModule, FormsModule, Input],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
})
export class InputText extends BaseInputField<string> implements OnDestroy {
  type = input<'text' | 'email' | 'password'>('text');
  debounceTime = input<number>(0);

  valueChange = output<string>();

  private inputSubject = new Subject<string>();
  private subscription?: Subscription;

  constructor() {
    super();
    effect((onCleanup) => {
      const debounce = this.debounceTime();
      this.subscription?.unsubscribe();
      this.subscription = this.inputSubject
        .pipe(debounceTime(debounce), distinctUntilChanged())
        .subscribe((value) => {
          this.valueChange.emit(value);
        });
      onCleanup(() => {
        this.subscription?.unsubscribe();
      });
    });
  }

  onInputChange(value: string) {
    this.value.set(value);
    this.inputSubject.next(value);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.inputSubject.complete();
  }
}
