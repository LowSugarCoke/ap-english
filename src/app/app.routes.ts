import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/home';
import { TermsOfServiceComponent } from './pages/term_of_service/terms-of-service.component';
import { PrivacyPolicyComponent } from './pages/privacy_policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
