import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { MenuItem } from 'primeng/api';
import { ButtonSeverity } from 'primeng/button';

export interface ITableAction<T> extends MenuItem {
  triggerAction: string;
  color?: ButtonSeverity;
  faIcon?: IconDefinition;
  paramsRender?: (entity: T) => string[];
}
