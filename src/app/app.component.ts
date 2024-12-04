import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BannerSectionComponent } from './pages/home/banner-section/banner-section.component';
import { Section2Component } from './pages/home/section-2/section-2.component';
import { Section3Component } from './pages/home/section-3/section-3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BannerSectionComponent, Section2Component, Section3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ENVAI-PROJECT';
}
