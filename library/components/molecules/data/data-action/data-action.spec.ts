import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAction } from './data-action';

describe('DataAction', () => {
  let component: DataAction;
  let fixture: ComponentFixture<DataAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
