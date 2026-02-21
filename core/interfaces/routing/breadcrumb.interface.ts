import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';

export interface IBreadcrumb extends MenuItem {
  faIcon?: IconDefinition;
}
