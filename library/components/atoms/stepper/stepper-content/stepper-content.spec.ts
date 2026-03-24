import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperContent } from './stepper-content';

describe('StepperContent', () => {
  let component: StepperContent;
  let fixture: ComponentFixture<StepperContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
