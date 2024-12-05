import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from "./pages/pages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected property name to 'styleUrls'
})
export class AppComponent {
  title = 'ENVAI-PROJECT';
}
