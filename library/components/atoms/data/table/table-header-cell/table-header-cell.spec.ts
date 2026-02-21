import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderCell } from './table-header-cell';

describe('TableHeaderCell', () => {
  let component: TableHeaderCell;
  let fixture: ComponentFixture<TableHeaderCell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHeaderCell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeaderCell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
