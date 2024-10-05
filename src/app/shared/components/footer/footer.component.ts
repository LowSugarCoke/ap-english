import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
})
export class FooterComponent implements OnInit {
  currentYear: number = 2024;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
