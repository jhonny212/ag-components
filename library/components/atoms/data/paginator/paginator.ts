import { Component, input, output } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-paginator',
  imports: [PaginatorModule],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss',
})
export class Paginator {
  first = input<number>(0);
  rows = input.required<number>();
  totalRecords = input<number>(0);
  showDropdown = input<boolean>(true);
  showPages = input<boolean>(false);
  pageTemplate = input<string>('Mostrando {first} a {last} de {totalRecords} registros');

  onPage = output<PaginatorState>();

  onPageChange(event: PaginatorState) {
    this.onPage.emit(event);
  }
}
