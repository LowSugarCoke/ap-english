import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'; // 匯入 MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // 匯入 MatInputModule
import { MatButtonModule } from '@angular/material/button'; // 匯入 MatButtonModule (如需按鈕)
import { MatToolbarModule } from '@angular/material/toolbar'; // 匯入 MatToolbarModule
import { MatIconModule } from '@angular/material/icon'; // 匯入 MatIconModule
import { MatGridListModule } from '@angular/material/grid-list'; // 匯入 MatGridListModule

@Component({
  selector: 'app-homepage',
  standalone: true, // standalone 組件
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [
    MatFormFieldModule, // 匯入 MatFormFieldModule
    MatInputModule, // 匯入 MatInputModule
    MatButtonModule, // 匯入 MatButtonModule
    MatToolbarModule, // 匯入 MatToolbarModule
    MatIconModule, // 匯入 MatIconModule
    MatGridListModule, // 匯入 MatGridListModule
  ],
})
export class HomepageComponent {
  // 組件的邏輯在這裡
}
