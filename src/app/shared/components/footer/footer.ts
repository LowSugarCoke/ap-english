import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>© 2024 AP Program. All rights reserved.</p>
      <nav>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy</a>
      </nav>
    </footer>
  `,
  styles: [
    `
      .footer {
        padding: 20px 0;
        border-top: 1px solid #ccc;
        text-align: center;
      }
      .footer nav a {
        margin: 0 10px;
        text-decoration: none;
        color: #3f51b5;
      }
    `,
  ],
})
export class FooterComponent {}
