import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { KagglePageData } from './kaggle-page.types';
import { kagglePageData } from './kaggle-page.data';

@Component({
  selector: 'app-kaggle-page',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './kaggle-page.component.html',
  styleUrls: ['./kaggle-page.component.css'],
})
export class KagglePageComponent implements AfterViewInit {
  data: KagglePageData = kagglePageData;

  @ViewChildren('card') cards!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setEqualCardHeight();
    }
  }

  setEqualCardHeight() {
    if (this.cards && this.cards.length > 0) {
      requestAnimationFrame(() => {
        const cardElements = this.cards.map((card) => card.nativeElement);
        const maxHeight = Math.max(
          ...cardElements.map((el) => el.offsetHeight)
        );
        cardElements.forEach((el) => (el.style.height = `${maxHeight}px`));
      });
    }
  }
}
