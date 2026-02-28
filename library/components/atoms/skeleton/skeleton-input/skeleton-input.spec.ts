import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonInput } from './skeleton-input';

describe('SkeletonInput', () => {
  let component: SkeletonInput;
  let fixture: ComponentFixture<SkeletonInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
