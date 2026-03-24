import {
  Component,
  computed,
  contentChildren,
  input,
  model,
  signal,
  TemplateRef,
} from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { Button } from '../buttons/button/button';
import { IStep } from '@lib/core/interfaces/stepper/stepper.interface';
import { StepContentDirective } from '@lib/core/directives/step-content.directive';
import { NgTemplateOutlet } from '@angular/common';
import { StepperFooter } from './stepper-footer/stepper-footer';

@Component({
  selector: 'app-stepper',
  imports: [StepperModule, NgTemplateOutlet, StepperFooter],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export class Stepper {
  private stepContents = contentChildren(StepContentDirective);

  // ── Inputs ──────────────────────────────────────────────
  steps = input<IStep[]>([]);

  // ── State ────────────────────────────────────────────────
  activeIndex = signal<number>(0);

  // ── Computed ─────────────────────────────────────────────
  currentIndex = computed(() => this.steps().findIndex((s) => s.id === this.activeIndex()));
  isFirst = computed(() => this.currentIndex() === 0);
  isLast = computed(() => this.currentIndex() === this.steps().length - 1);

  templateMap = computed(() => {
    const map = new Map<number, TemplateRef<any>>();
    for (const directive of this.stepContents()) {
      map.set(directive.stepId(), directive.templateRef);
    }
    return map;
  });
}
