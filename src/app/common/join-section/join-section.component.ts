import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './join-section.component.html',
  styleUrl: './join-section.component.css'
})
export class JoinSectionComponent {
  joinEnvaiImg = 'assets/home/join-envai-img.png'
}
