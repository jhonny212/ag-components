import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHeaderCell } from './grid-header-cell';

describe('GridHeaderCell', () => {
  let component: GridHeaderCell;
  let fixture: ComponentFixture<GridHeaderCell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridHeaderCell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridHeaderCell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
