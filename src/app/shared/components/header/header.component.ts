import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
  RouterLink,
  RouterLinkActive,
  IsActiveMatchOptions,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavItem } from './nav-item.model';
import { NAV_ITEMS } from './nav-items.data';
import { getRouterLinkActiveOptions } from '../../../router-match-options';

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
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navItems: NavItem[] = NAV_ITEMS;
  getRouterLinkActiveOptions = getRouterLinkActiveOptions;
}
