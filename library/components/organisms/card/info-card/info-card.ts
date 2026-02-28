import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonSeverity } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Card } from '../../../atoms/other/card/card';
import { SkeletonInput } from '../../../atoms/skeleton/skeleton-input/skeleton-input';
import { SkeletonIcon } from '../../../atoms/skeleton/skeleton-icon/skeleton-icon';
import { SkeletonText } from '../../../atoms/skeleton/skeleton-text/skeleton-text';

@Component({
  selector: 'app-info-card',
  imports: [CardModule, FontAwesomeModule, Card, SkeletonInput, SkeletonIcon, SkeletonText],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss',
})
export class InfoCard {
  title = input.required<string>();
  subTitle = input<string>();
  icon = input<IconDefinition>();
  info = input<string>();
  severity = input<ButtonSeverity>();
  loading = input<boolean | undefined>(false);
}
