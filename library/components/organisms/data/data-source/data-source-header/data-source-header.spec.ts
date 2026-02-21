import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceHeader } from './data-source-header';

describe('DataSourceHeader', () => {
  let component: DataSourceHeader;
  let fixture: ComponentFixture<DataSourceHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSourceHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSourceHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
