import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconFieldModule } from 'primeng/iconfield';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputText } from '../../../atoms';
import { BaseInputField } from 'src/app/shared/library/base';

@Component({
  selector: 'app-search-input',
  imports: [InputText, IconFieldModule, FontAwesomeModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
})
export class SearchInput extends BaseInputField<string> {
  debounceTime = input<number>(0);

  searchIcon = faSearch;
}
