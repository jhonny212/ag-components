import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
  AutoCompleteSelectEvent,
} from 'primeng/autocomplete';
import { FormValueControl } from '@angular/forms/signals';
import { BaseSelect } from '../../../../base';
import { RenderItem } from '../../other/render-item/render-item';
import { Input } from '../../input/input/input';
import { ISelectSearch } from '@lib/core/interfaces/select/autocomplete-search.interface';

@Component({
  selector: 'app-autocomplete',
  imports: [AutoCompleteModule, FormsModule, Input, RenderItem],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss',
})
export class Autocomplete<T> extends BaseSelect<T> implements FormValueControl<T | null> {
  onSearch = output<ISelectSearch>();
  onAdd = output<string>();
  previousQuery: string = '';

  selectedItem: T | null = null;

  handleFilter(event: AutoCompleteCompleteEvent): void {
    const query = event.query;
    this.onSearch.emit({
      query,
      sameAsPrevious: query === this.previousQuery,
    });
    this.previousQuery = query;
  }

  handleAdd(event: Event, autocomplete: any): void {
    if ((event as KeyboardEvent).key === 'Enter') {
      const inputValue = (event.target as HTMLInputElement).value;
      this.onAdd.emit(inputValue);
    }
  }

  onInputChange(value: T): void {
    this.value.set(value);
  }

  handleSelect(value: AutoCompleteSelectEvent): void {
    this.onSelect.emit(value.value);
  }
}
