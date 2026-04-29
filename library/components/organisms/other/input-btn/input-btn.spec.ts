import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBtn } from './input-btn';

describe('InputBtn', () => {
  let component: InputBtn;
  let fixture: ComponentFixture<InputBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
