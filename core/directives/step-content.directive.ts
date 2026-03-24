import { Directive, input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[stepContent]',
})
export class StepContentDirective {
  stepId = input.required<number>({ alias: 'stepContent' });
  constructor(public templateRef: TemplateRef<any>) {}
}
