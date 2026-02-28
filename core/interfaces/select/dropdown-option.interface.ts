import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface IDropdownOption<T> {
  id: string;
  label: string;
  value: T;
  icon?: IconDefinition;
}
