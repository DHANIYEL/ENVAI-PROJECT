// src/app/pages/pages.component.ts
import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TokensComponent } from "./tokens/tokens.component";
import { InvestmentComponent } from "./investment/investment.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-pages',
  standalone: true,  // Mark as standalone
  imports: [AboutComponent, ProjectsComponent, TokensComponent, InvestmentComponent, HomeComponent],  // Add any necessary imports here, like CommonModule if needed
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {}
