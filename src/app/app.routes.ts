import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TokensComponent } from './pages/tokens/tokens.component';
import { InvestmentComponent } from './pages/investment/investment.component';
import { InvestComponent } from './pages/investment/invest/invest.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { RiskStatementComponent } from './pages/risk-statement/risk-statement.component';
import { FAQsComponent } from './pages/faqs/faqs.component';
import { FactsFiguresComponent } from './pages/facts-figures/facts-figures.component';
import { ManagementComponent } from './pages/management/management.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '' }, // Catch-all route
  { path: 'about-us', component: AboutComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tokens', component: TokensComponent },
  { path: 'investment-rules', component: InvestmentComponent },
  { path: 'invest', component: InvestComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'risk-statement', component: RiskStatementComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: 'facts-figures', component: FactsFiguresComponent },
];
