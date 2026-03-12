import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFa } from './icon-fa';

describe('IconFa', () => {
  let component: IconFa;
  let fixture: ComponentFixture<IconFa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconFa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconFa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
