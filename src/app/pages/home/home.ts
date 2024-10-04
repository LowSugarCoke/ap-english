import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FooterComponent } from '../../shared/components/footer/footer';
import { HeaderComponent } from '../../shared/components/header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    FooterComponent,
    HeaderComponent,
    RouterModule,
  ],
})
export class HomepageComponent implements OnInit {
  heroCols: number = 1;
  heroRowHeight: string = '700px';
  heroRowspans: number[] = [2, 1];

  featureCols: number = 3;
  featureHeight: string = '550px';

  instructorCols: number = 2;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.heroCols = 1;
            this.heroRowHeight = '400px';
            this.heroRowspans = [2, 1];

            this.featureCols = 1;
            this.featureHeight = '250px';

            this.instructorCols = 1;
          } else if (result.breakpoints[Breakpoints.Small]) {
            this.heroCols = 1;
            this.heroRowHeight = '500px';
            this.heroRowspans = [1, 1];

            this.featureCols = 1;
            this.featureHeight = '300px';

            this.instructorCols = 1;
          } else if (result.breakpoints[Breakpoints.Medium]) {
            this.heroCols = 2;
            this.heroRowHeight = '700px';
            this.heroRowspans = [1, 1];

            this.featureCols = 3;
            this.featureHeight = '500px';

            this.instructorCols = 2;
          } else {
            this.heroCols = 2;
            this.heroRowHeight = '700px';
            this.heroRowspans = [1, 1];

            this.featureCols = 3;
            this.featureHeight = '550px';

            this.instructorCols = 2;
          }
        }
      });
  }
}
