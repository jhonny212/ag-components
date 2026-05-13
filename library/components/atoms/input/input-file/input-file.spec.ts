import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFile } from './input-file';

describe('InputFile', () => {
  let component: InputFile;
  let fixture: ComponentFixture<InputFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFile],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keep drag and drop hidden by default', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-input-file-drop-zone')).toBeNull();
  });

  it('should render drag and drop when enabled', () => {
    component.showDragAndDrop.set(true);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-input-file-drop-zone')).not.toBeNull();
  });

  it('should normalize selected files to the configured max files', () => {
    component.maxFiles.set(1);

    const files = [
      new File(['alpha'], 'alpha.txt', { type: 'text/plain' }),
      new File(['beta'], 'beta.txt', { type: 'text/plain' }),
    ];

    component.onFileInputChange({
      target: {
        files,
        value: 'alpha.txt',
      },
    } as unknown as Event);

    expect(component.value()).toHaveLength(1);
    expect(component.value()?.[0].name).toBe('alpha.txt');
    expect(component.hasFiles()).toBeTrue();
  });
});
