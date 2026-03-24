import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconFieldModule } from 'primeng/iconfield';
import { BaseInputField } from 'src/app/shared/library/base';
import { InputText } from '../../../atoms/input/input-text/input-text';
import { IconFa } from '../../../atoms/other/icon-fa/icon-fa';

@Component({
  selector: 'app-search-input',
  imports: [InputText, IconFieldModule, FontAwesomeModule, IconFa],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
})
export class SearchInput extends BaseInputField<string> {
  debounceTime = input<number>(0);
  minTextLength = input<number>(3);
  acceptEmptyString = input<boolean>(true);

  searchIcon = faSearch;

  // handleClick(event: Event) {
  //   console.log('EMITIENDO DESDE ACA', event);
  //   this.onClick.emit(event);
  // }
}
