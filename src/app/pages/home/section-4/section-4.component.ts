import { Component, OnInit } from '@angular/core';
import { ProjectCardModule } from '../../../components/project-card/project-card.module';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';

interface Project {
  title: string;
  smallDescription: string;
  detailedDescription: string;
  projectUrls: string;
  iconUrls: string;
  id: string;
  amount: number;
}

@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [ProjectCardModule, NgForOf, RouterModule, CommonModule],
  templateUrl: './section-4.component.html',
  styleUrls: ['./section-4.component.css'],
})
export class Section4Component implements OnInit {
  currentSlide = 0;
  statementImg = 'assets/icon/projects.svg';
  projects: Project[] = [];
  loading = false;
  errorMessage: string = '';
  itemsPerSlide = 4;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.loading = true;
    this.apiService.getAllProjects().subscribe({
      next: (response) => {
        // Direct mapping of the response since it's already Project[]
        this.projects = response.map((project: any) => ({
          title: project.strTitle,
          smallDescription: project.short_Description,
          detailedDescription: project.long_Description,
          projectUrls: project.strProjectUrls,
          iconUrls: project.strIconUrls,
          id: project.fkProjectId,
          amount: project.amount
        }));
        this.loading = false;
      },
      error: (error) => {
        console.error('Failed to fetch projects:', error);
        this.errorMessage = 'Could not load projects. Please try again later.';
        this.loading = false;
      }
    });
  }

  // Calculate number of slides needed based on projects array length
  get numberOfSlides(): number {
    return Math.ceil(this.projects.length / this.itemsPerSlide);
  }

  // Get projects for a specific slide
  getProjectsForSlide(slideIndex: number): Project[] {
    const startIndex = slideIndex * this.itemsPerSlide;
    return this.projects.slice(startIndex, startIndex + this.itemsPerSlide);
  }
}
