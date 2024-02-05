import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResumeSubmission } from '../interfaces/resume-submission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeSubmissionService {
  private apiUrl = 'http://localhost:3000/applicants';

  constructor(private http: HttpClient) { }

  // GET all applicants
  getApplicants(): Observable<ResumeSubmission[]> {
    return this.http.get<ResumeSubmission[]>(this.apiUrl);
  }

  // POST new applicant
  addApplicant(applicant: ResumeSubmission): Observable<ResumeSubmission> {
    return this.http.post<ResumeSubmission>(this.apiUrl, applicant);
  }
}
