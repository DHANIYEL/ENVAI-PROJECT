import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected property name to 'styleUrls'
})
export class AppComponent {
  title = 'ENVAI-PROJECT';
}
