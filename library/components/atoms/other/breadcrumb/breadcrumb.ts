import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Component, inject, input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RedirectHelper } from '@core/helper/redirect.helper';
import { TooltipModule } from 'primeng/tooltip';
import { IBreadcrumb } from '@lib/core/interfaces/routing/breadcrumb.interface';
import { IconFa } from "../icon-fa/icon-fa";

@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule, RouterModule, FontAwesomeModule, TooltipModule, IconFa],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  redirect = inject(RedirectHelper);

  items = input<MenuItem[]>();

  home?: IBreadcrumb = { faIcon: faHome, routerLink: '/', label: 'Inicio' };

  handleRedirect(item: MenuItem) {
    if (item.routerLink) {
      this.redirect.to(item.routerLink);
    }
  }
}
