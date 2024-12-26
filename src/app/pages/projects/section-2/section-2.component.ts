import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-section-2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './section-2.component.html',
  styleUrls: ['./section-2.component.css'],
})
export class Section2Component implements OnInit {
  buildingIcon = 'assets/icon/building.svg'

  projects: Project[] = [];
  loading = false;
  errorMessage: string = '';
  rightArrowIcon = 'assets/icon/right-arrow.svg';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.loading = true;
    this.apiService.getAllProjects().subscribe({
      next: (response) => {
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
}
