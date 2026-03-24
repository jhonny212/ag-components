import { Component, input, model, signal } from '@angular/core';
import { Button } from '../../buttons/button/button';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stepper-footer',
  imports: [Button],
  templateUrl: './stepper-footer.html',
  styleUrl: './stepper-footer.scss',
})
export class StepperFooter {
  isFirst = input.required<boolean>();
  isLast = input.required<boolean>();
  activeIndex = model.required<number>();

  nextIcon = signal(faArrowRight);
  prevIcon = signal(faArrowLeft);

  handlePrev(): void {
    if (this.isFirst()) return;
    this.activeIndex.update((i) => i - 1);
  }

  handleNext(): void {
    if (this.isLast()) return;
    this.activeIndex.update((i) => i + 1);
  }
}
