import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/home';
import { TermsOfServiceComponent } from './pages/term_of_service/terms-of-service.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
];
