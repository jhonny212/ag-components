import { Component, computed, input, output } from '@angular/core';
import { GridHeader } from '../grid-header/grid-header';
import { GridRow } from '../grid-row/grid-row';
import { ColorType } from '@core/types/color.type';
import { AccordionModule } from 'primeng/accordion';
import { ITableAction } from '@lib/core/interfaces/data/table/table-action.interface';
import { IDataSourceConfig } from '@lib/core/interfaces/data/data-source-config.interface';
import { ICellEvent } from '@lib/core/interfaces/data/table/table-event.interface';
import { Card } from '../../../../atoms/other/card/card';
import { useDarkMode } from '@core/util/general.util';

@Component({
  selector: 'app-grid-card',
  imports: [GridHeader, GridRow, AccordionModule, Card],
  templateUrl: './grid-card.html',
  styleUrl: './grid-card.scss',
})
export class GridCard<T> {
  item = input.required<T>();
  dataSourceConfig = input.required<IDataSourceConfig<T>>();
  actions = input<ITableAction<T>[]>([]);
  selectedItem = input<T | null>(null);

  onClick = output<T>();
  onAction = output<ICellEvent<T>>();

  isActive = computed(() => {
    if (!this.selectedItem()) {
      return false;
    }
    return (
      this.selectedItem()![this.dataSourceConfig().key as keyof T] ===
      this.item()[this.dataSourceConfig().key as keyof T]
    );
  });

  isExpanded = computed(() => this.dataSourceConfig().mobileMode === 'card-expanded');

  cardColor = computed(() => {
    if (useDarkMode().isDark()) {
      return !this.isActive() ? 'primary' : this.dataSourceConfig().color;
    }
    const color: ColorType = this.isActive() ? 'primary' : this.dataSourceConfig().color;
    return color;
  });

  handleAction(event: ICellEvent<T>): void {
    this.onAction.emit(event);
  }

  handleClick(): void {
    this.onClick.emit(this.item());
  }
}
