import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/home';
import { TermsOfServiceComponent } from './pages/term_of_service/terms-of-service.component';
import { PrivacyPolicyComponent } from './pages/privacy_policy/privacy-policy.component';
import { KagglePageComponent } from './pages/kaggle/kaggle-page.component';
import { UsacoPageComponent } from './pages/usaco/usaco-page.component';
import { ApcsaPageComponent } from './pages/apcas/apcsa-page.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'kaggle', component: KagglePageComponent },
  { path: 'usaco', component: UsacoPageComponent },
  { path: 'apcsa', component: ApcsaPageComponent },
  { path: 'apcsp', component: ApcsaPageComponent },
];
