import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  `,
  styles: [
    `
      .card {
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .card-title {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .card-description {
        font-size: 1rem;
        flex-grow: 1;
      }
    `,
  ],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
