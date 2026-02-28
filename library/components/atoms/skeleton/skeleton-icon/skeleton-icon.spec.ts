import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonIcon } from './skeleton-icon';

describe('SkeletonIcon', () => {
  let component: SkeletonIcon;
  let fixture: ComponentFixture<SkeletonIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
