import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-grid-header',
  imports: [],
  templateUrl: './grid-header.html',
  styleUrl: './grid-header.scss',
})
export class GridHeader<T> {
  header = input<keyof T>();
  headerRender = input<(item: T, isActive?: boolean) => string>();
  item = input.required<T>();
  isActive = input(false);

  headerText = computed(() => {
    if (this.headerRender()) {
      return this.headerRender()!(this.item(), this.isActive());
    }
    return this.header() as string;
  });
}
