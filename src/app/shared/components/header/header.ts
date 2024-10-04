import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z4">
      <mat-icon>school</mat-icon>
      <span>AP Program</span>
      <span class="spacer"></span>

      <!-- Desktop -->
      <div class="desktop-nav">
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
        <a mat-button routerLink="/contact" routerLinkActive="active"
          >Contact</a
        >
      </div>

      <!-- Mobile -->
      <button
        mat-icon-button
        [matMenuTriggerFor]="menu"
        class="mobile-menu-button"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <a
          mat-menu-item
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >Home</a
        >
        <a mat-menu-item routerLink="/programs" routerLinkActive="active"
          >Programs</a
        >
        <a mat-menu-item routerLink="/instructors" routerLinkActive="active"
          >Instructors</a
        >
        <a mat-menu-item routerLink="/contact" routerLinkActive="active"
          >Contact</a
        >
      </mat-menu>
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
      .mobile-menu-button {
        display: none;
      }
      @media (max-width: 768px) {
        .desktop-nav {
          display: none;
        }
        .mobile-menu-button {
          display: block;
        }
      }
    `,
  ],
})
export class HeaderComponent {}
