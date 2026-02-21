import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSource } from './data-source';

describe('DataSource', () => {
  let component: DataSource;
  let fixture: ComponentFixture<DataSource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
