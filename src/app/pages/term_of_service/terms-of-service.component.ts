import { Component } from '@angular/core';
import { TermsSection } from './terms-of-service-model';
import { CommonModule } from '@angular/common';
import { termsSections } from './terms-of-service-data';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TermsOfServiceComponent {
  termsSections: TermsSection[] = termsSections;

  isArray(content: any): content is string[] {
    return Array.isArray(content);
  }
}
