import { Injectable } from '@angular/core';
import { Job } from '../interfaces/job';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: Job[] = [
    { id: 1, role: 'Software Engineer', location: 'New York', type: 'Full-Time' },
    { id: 2, role: 'Data Analyst', location: 'San Francisco', type: 'Contract' },
    { id: 3, role: 'UI/UX Designer', location: 'London', type: 'Remote' },
    { id: 4, role: 'UI/UX Developer', location: 'Pakistan', type: 'Full-Time' },
    // Add more job data as needed
  ];

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }
}
