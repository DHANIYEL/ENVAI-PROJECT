import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css'],
})
export class InvestComponent implements OnInit {
  mainImg = 'assets/investPage/main.jpg';
  tokenImg = 'assets/investPage/token.png';

  patternSvg1 = 'assets/svg/pattern1.svg';
  patternSvg2 = 'assets/svg/pattern2.svg';
  patternSvg3 = 'assets/svg/pattern3.svg';
  patternSvg4 = 'assets/svg/pattern4.svg';

  projects: { id: string; title: string }[] = []; // Store project titles and IDs
  loading = false;
  errorMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.loading = true;
    this.apiService.getAllProjects().subscribe({
      next: (projects) => {
        // Map projects to only include title and id
        this.projects = projects.map((project: any) => ({
          id: project.fkProjectId,
          title: project.strTitle,
        }));
        this.loading = false;
      },
      error: (error) => {
        console.error('Failed to fetch projects:', error);
        this.errorMessage = 'Could not load projects. Please try again later.';
        this.loading = false;
      },
    });
  }
}
