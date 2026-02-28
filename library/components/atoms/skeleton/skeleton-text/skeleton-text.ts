import { Component, computed, input } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-skeleton-text',
  imports: [Skeleton],
  templateUrl: './skeleton-text.html',
  styleUrl: './skeleton-text.scss',
})
export class SkeletonText {
  paragraphNumber = input.required<number>();

  paragraphs = computed(() => {
    return Array(this.paragraphNumber()).fill(0);
  });
}
