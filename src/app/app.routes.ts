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
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'ENVAI | Empower Your Investments',
      description: 'Discover Envai Projects, a pioneering platform driving innovative, sustainable, and impactful solutions.',
    },
  },
  {
    path: 'about-us',
    component: AboutComponent,
    data: {
      title: 'About Envai Projects | Innovating for a Greener Tomorrow',
      description: "Learn about Envai Projects' mission, vision, and dedication to building a sustainable future through innovative initiatives.",
    },
  },
  {
    path: 'management',
    component: ManagementComponent,
    data: {
      title: 'Management | Leading Sustainability Initiatives',
      description: "Discover Envai Projects, a pioneering platform driving innovative, sustainable, and impactful solutions.",
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Our Projects | Creating Long-Term Sustainability',
      description: 'Explore Envai Projects’ portfolio of impactful ventures focused on creating long-term value and sustainability.',
    },
  },
  {
    path: 'tokens',
    component: TokensComponent,
    data: {
      title: 'Envai Tokens | Powering Green Investments',
      description: 'Understand the role of Envai tokens in powering sustainable investments and fostering a green economy.',
    },
  },
  {
    path: 'investment-rules',
    component: InvestmentComponent,
    data: {
      title: 'Investment Rules | Principles of Sustainable Growth',
      description: 'Read the guidelines and principles governing investments in Envai Projects.',
    },
  },
  {
    path: 'invest',
    component: InvestComponent,
    data: {
      title: 'Invest with Envai | Drive Sustainability',
      description: 'Become part of Envai Projects’ mission by investing in sustainable solutions that create positive change.',
    },
  },
  {
    path: 'contact-us',
    component: ContactComponent,
    data: {
      title: 'Contact Envai | Partner with Us',
      description: 'Connect with Envai Projects for inquiries, partnerships, or more information about our initiatives.',
    },
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: {
      title: 'Privacy Policy | Protecting Your Data',
      description: 'Understand how Envai Projects protects your personal data and ensures privacy.',
    },
  },
  {
    path: 'terms',
    component: TermsComponent,
    data: {
      title: 'Terms & Conditions | Our Commitment',
      description: 'Review the terms and conditions governing the use of Envai Projects’ platform and services.',
    },
  },
  {
    path: 'risk-statement',
    component: RiskStatementComponent,
    data: {
      title: 'Risk Statement | Transparency in Investments',
      description: 'Understand the risks associated with Envai Projects’ investment opportunities.',
    },
  },
  {
    path: 'faqs',
    component: FAQsComponent,
    data: {
      title: 'FAQs | Learn More About Envai',
      description: 'Find answers to frequently asked questions about Envai Projects and its operations.',
    },
  },
  {
    path: 'facts-figures',
    component: FactsFiguresComponent,
    data: {
      title: 'Facts & Figures | Envai in Numbers',
      description: 'Delve into the numbers and data behind Envai Projects’ success and impact.',
    },
  },
];
