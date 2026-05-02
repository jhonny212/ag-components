import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IBaseMenu } from "../../../../core/interfaces/routing/menu.interface";

export interface IRoute extends IBaseMenu {
  path: string;
  icon?: IconDefinition
}
