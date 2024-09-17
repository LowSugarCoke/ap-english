import { bootstrapApplication } from '@angular/platform-browser';
import { HomepageComponent } from './app/pages/home/home';
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
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatGridListModule
    ),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
