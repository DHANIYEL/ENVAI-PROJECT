import { Component } from '@angular/core';

@Component({
  selector: 'app-animate-section',
  standalone: true,
  imports: [],
  templateUrl: './animate-section.component.html',
  styleUrl: './animate-section.component.css'
})
export class AnimateSectionComponent {

  animatedScreenVideo = 'assets/home/animate-video-2.mp4';

  animatedVideo = 'assets/home/animate-video.mp4'
}
