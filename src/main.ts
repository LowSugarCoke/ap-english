import { bootstrapApplication } from '@angular/platform-browser';
import { HomepageComponent } from './app/pages/home/home'; // 確保路徑正確
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(HomepageComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(
      BrowserAnimationsModule,
      MatToolbarModule, // 匯入 Angular Material 的 Toolbar 模組
      MatButtonModule, // 匯入 Angular Material 的按鈕模組
      MatIconModule, // 匯入 Angular Material 的 Icon 模組
      MatGridListModule // 匯入 Angular Material 的 GridList 模組
    ), provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
