import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TokensComponent } from './pages/tokens/tokens.component';
import { InvestmentComponent } from './pages/investment/investment.component';
import { InvestComponent } from './pages/investment/invest/invest.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tokens', component: TokensComponent },
  { path: 'investment-rules', component: InvestmentComponent },
  { path: 'invest', component: InvestComponent },
  { path: 'contact-us', component: ContactComponent },
];
