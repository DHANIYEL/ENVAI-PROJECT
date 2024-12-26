import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Interface for Project data
export interface Project {
  id: string;
  name: string;
  description?: string;
  // Add other project properties as needed
}

// Interface for API Response
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://admin.envaiprojects.com/v1/api';

  constructor(private http: HttpClient) { }

  // Helper method to get HTTP headers with authentication token
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token not found. Please log in.');
    }
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Helper method to handle HTTP errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  // Get all projects
  getAllProjects(): Observable<Project[]> {
    try {
      const headers = this.getAuthHeaders();
      const payload = {
        token: localStorage.getItem('token')
      };

      return this.http.post<ApiResponse<Project[]>>(
        `${this.baseUrl}/projects/get_all_projects`,
        payload,
        { headers }
      ).pipe(
        map(response => {
          if (!response.success) {
            throw new Error(response.message || 'Failed to fetch projects');
          }
          return response.data;
        }),
        catchError(this.handleError)
      );
    } catch (error) {
      return throwError(() => error);
    }
  }
}
