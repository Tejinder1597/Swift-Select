import { Injectable } from '@angular/core';
import { Job } from '../interfaces/job';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: Job[] = [
    { id: 1, role: 'Software Engineer', location: 'New York', type: 'Full-Time', skills: ['Java', 'Python', 'JavaScript'] },
    { id: 2, role: 'Data Analyst', location: 'San Francisco', type: 'Contract', skills: ['R', 'Python', 'Machine Learning'] },
    { id: 3, role: 'UI/UX Designer', location: 'London', type: 'Remote', skills: ['Sketch', 'Figma', 'User Research'] },
    { id: 4, role: 'UI/UX Developer', location: 'Pakistan', type: 'Full-Time', skills: ['HTML', 'CSS', 'JavaScript'] },
    // Add more job data as needed
  ];

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }
}
