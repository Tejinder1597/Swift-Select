import { Component, OnInit } from '@angular/core';
import { ResumeSubmissionService } from 'src/app/services/resume-submission.service';

@Component({
  selector: 'app-submission-confirmation',
  templateUrl: './submission-confirmation.component.html',
  styleUrls: ['./submission-confirmation.component.scss']
})
export class SubmissionConfirmationComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  applyingFor: string = '';
  email: string = '';

  constructor(private resumeSubmissionService: ResumeSubmissionService) { }

  ngOnInit(): void {
    // Fetch applicant data from the service
    this.resumeSubmissionService.getApplicants().subscribe(
      (ResumeSubmission) => {
        if (ResumeSubmission.length > 0) {
          const applicant = ResumeSubmission[ResumeSubmission.length - 1]; // Get the latest applicant
          this.firstName = applicant.firstName;
          this.lastName = applicant.lastName;
          this.applyingFor = applicant.applyingFor;
          this.email = applicant.email;
        }
      },
      (error) => {
        console.error('Error fetching applicant data:', error);
      }
    );
  }

}
