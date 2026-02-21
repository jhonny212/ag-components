import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRow } from './grid-row';

describe('GridRow', () => {
  let component: GridRow;
  let fixture: ComponentFixture<GridRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
