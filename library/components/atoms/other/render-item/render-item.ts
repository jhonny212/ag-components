import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-render-item',
  imports: [],
  templateUrl: './render-item.html',
  styleUrl: './render-item.scss',
})
export class RenderItem<T> {
  item = input.required<T>();
  labelKey = input<keyof T>();
  render = input<(item: T) => string>();

  label = computed(() => {
    if (this.render() !== undefined) {
      const item = this.item();
      return this.render()!(item);
    }
    if (this.labelKey()) {
      return String(this.item()[this.labelKey()!]);
    }
    return String(this.item());
  });
}
