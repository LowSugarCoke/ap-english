import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z4">
      <mat-icon>school</mat-icon>
      <span>AP Program</span>
      <span class="spacer"></span>
      <a
        mat-button
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        >Home</a
      >
      <a mat-button routerLink="/programs" routerLinkActive="active"
        >Programs</a
      >
      <a mat-button routerLink="/instructors" routerLinkActive="active"
        >Instructors</a
      >
      <a mat-button routerLink="/contact" routerLinkActive="active">Contact</a>
    </mat-toolbar>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
      .active {
        font-weight: bold;
      }
    `,
  ],
})
export class HeaderComponent {}
