// src/app/pages/pages.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component'; // Import PagesComponent
import { ProjectCardComponent } from '../components/project-card/project-card.component';

@NgModule({
  imports: [
    CommonModule,
    PagesComponent,  // Import the PagesComponent
    // Other modules or components
  ],
  declarations: [
    ProjectCardComponent,
  ],
  exports: [
    ProjectCardComponent,  // Export components you want to use outside
  ]
})
export class PagesModule { }
