import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUploadItem } from './input-upload-item';

describe('InputUploadItem', () => {
  let component: InputUploadItem;
  let fixture: ComponentFixture<InputUploadItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputUploadItem],
    }).compileComponents();

    fixture = TestBed.createComponent(InputUploadItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
