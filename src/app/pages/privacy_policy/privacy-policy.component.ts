import { Component } from '@angular/core';
import { PrivacySection } from './privacy-policy-model';
import { privacySections } from './privacy-policy-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PrivacyPolicyComponent {
  privacySections: PrivacySection[] = privacySections;

  isArray(content: any): content is string[] {
    return Array.isArray(content);
  }
}
