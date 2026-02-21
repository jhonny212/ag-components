import { Component, input, model } from '@angular/core';
import { faGridHorizontal, faTable } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-data-source-header',
  imports: [FaIconComponent],
  templateUrl: './data-source-header.html',
  styleUrl: './data-source-header.scss',
})
export class DataSourceHeader {
  title = input<string>('');
  subTitle = input<string>('');
  isTableView = model.required<boolean>();

  tableView = faTable;
  cardView = faGridHorizontal;

  handleViewChange(isTable: boolean): void {
    this.isTableView.set(isTable);
  }
}
