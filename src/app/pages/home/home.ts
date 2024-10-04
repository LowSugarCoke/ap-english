import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FooterComponent } from '../../shared/components/footer/footer';
import { HeaderComponent } from '../../shared/components/header/header';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InstructorDialogComponent } from './instructor-dialog';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
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

  instructorCols: number = 3;

  instructors = [
    {
      name: 'Nobel',
      title: 'PhD in Computer Science from National Tsing Hua University',
      expertise: 'AI Robotics, APCSA, Professional Academic Planning',
    },
    {
      name: 'Johnson',
      title:
        'PhD in Computer Science from National Chiao Tung University | Senior Programming Teacher',
      expertise: 'APCS, APCSA',
    },
    {
      name: 'Shawn',
      title: 'PhD in AI from UCLA',
      expertise: 'Study Abroad Consulting and Advising',
    },
    {
      name: 'Clare',
      title:
        'PhD in Computer Science from National Chiao Tung University | AI Expert',
      expertise: 'AI Courses, Thesis Guidance',
    },
    {
      name: 'DX',
      title:
        "Master's Degree in Computer Science from National Tsing Hua University | Award-winning Graduate",
      expertise: 'APCS, Leetcode, Tech Industry Interviews',
    },
    {
      name: 'Michael',
      title:
        "Master's Degree in Information Technology from National Chiao Tung University",
      expertise: 'APCS, Python',
    },
    {
      name: 'Amy',
      title:
        "Master's Degree in Computer Science and Doctorate in Education from National Chiao Tung University",
      expertise: 'Elementary Programming Logic Training and Development',
    },
    {
      name: 'Jack',
      title: 'Interviewer and Engineer at a North American Software Company',
      expertise:
        'Full-Stack Web Development, APCS, Leetcode, Tech Industry Interviews',
    },
    {
      name: 'Christina',
      title:
        "Master's Degree in Electrical Engineering from National Tsing Hua University",
      expertise: 'APCS, AI Courses',
    },
    {
      name: 'Yoga',
      title: 'PhD in Finance from National Chiao Tung University',
      expertise: 'SAT, Python, AP Calculus, AP Statistics',
    },
    {
      name: 'Yuzent',
      title: 'Competitive Programming Expert',
      expertise: 'APCS, Competitive Programming Competitions',
    },
    {
      name: 'Yano',
      title: 'Ten-Year Web Engineer',
      expertise:
        'Elementary Programming Logic Training and Development, Python, Web Development, Portfolio Building',
    },
    {
      name: 'Andy',
      title:
        "Master's Degree in Information Technology from National Chiao Tung University",
      expertise: 'Cybersecurity Expert, Hackathon Specialist',
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) {}

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

  openInstructorDialog() {
    this.dialog.open(InstructorDialogComponent, {
      width: this.instructorCols === 1 ? '90%' : '60%',
      data: { instructors: this.instructors },
    });
  }
}
