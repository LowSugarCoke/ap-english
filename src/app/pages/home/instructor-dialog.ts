import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructor-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Our Expert Instructors</h2>
    <mat-dialog-content>
      <ul class="instructor-list">
        <li *ngFor="let instructor of data.instructors">
          <strong>{{ instructor.name }}</strong> - {{ instructor.title }}
          <br />
          <small>Expertise: {{ instructor.expertise }}</small>
        </li>
      </ul>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .instructor-list {
        list-style-type: none;
        padding: 0;
      }
      .instructor-list li {
        margin-bottom: 15px;
      }
    `,
  ],
})
export class InstructorDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<InstructorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { instructors: any[] }
  ) {}
}
