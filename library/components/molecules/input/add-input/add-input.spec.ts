import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInput } from './add-input';

describe('AddInput', () => {
  let component: AddInput;
  let fixture: ComponentFixture<AddInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
