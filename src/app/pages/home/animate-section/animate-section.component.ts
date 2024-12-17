import { Component, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-animate-section',
  standalone: true,
  imports: [],
  templateUrl: './animate-section.component.html',
  styleUrl: './animate-section.component.css'
})
export class AnimateSectionComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  animateEnvaiVideo = 'assets/home/envai-1.mp4';
  isVideoReady = false;
  playAttempts = 0;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.setupVideoPlayback();
  }

  private setupVideoPlayback() {
    const video = this.videoElement.nativeElement;

    // Ensure video is muted and preloaded
    video.muted = true;
    video.preload = 'auto';

    // Setup event listeners
    video.addEventListener('loadedmetadata', () => {
      this.isVideoReady = true;
      this.attemptAutoPlay();
    });

    // Fallback play method
    video.addEventListener('canplay', () => this.attemptAutoPlay());

    // Ensure looping
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      this.attemptAutoPlay();
    });

    // Initial attempt to play
    this.attemptAutoPlay();
  }

  private attemptAutoPlay() {
    const video = this.videoElement.nativeElement;

    // Prevent excessive retry attempts
    if (this.playAttempts >= 5) return;

    this.ngZone.runOutsideAngular(() => {
      video.play().then(() => {
        // Success
        this.playAttempts = 0;
      }).catch((error) => {
        this.playAttempts++;
        console.warn(`Video play attempt ${this.playAttempts} failed:`, error);

        // Retry with a delay
        setTimeout(() => {
          // Try again, this time ensuring it's muted
          video.muted = true;
          video.play().catch(() => {
            // If still fails, we'll wait for user interaction
            console.warn('Video autoplay consistently failing');
          });
        }, 500 * this.playAttempts);
      });
    });
  }

  // Method to manually start video (can be called by a user interaction)
  public startVideo() {
    const video = this.videoElement.nativeElement;

    // Unmute if needed
    video.muted = false;

    video.play().catch(error => {
      console.warn('Manual video play failed:', error);
      // Fallback to muted play
      video.muted = true;
      video.play();
    });
  }
}
