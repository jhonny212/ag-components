import { Component, inject, input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'primeng/tooltip';
import { IBreadcrumb } from '@lib/core/interfaces/routing/breadcrumb.interface';
import { IconFa } from '../icon-fa/icon-fa';

@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule, RouterModule, FontAwesomeModule, TooltipModule, IconFa],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  router = inject(Router);

  items = input<MenuItem[]>();

  home = input<IBreadcrumb | undefined>(undefined);

  handleRedirect(item: MenuItem) {
    if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }
}
