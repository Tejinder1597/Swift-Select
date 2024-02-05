import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AIInterviewInfoComponent } from '../ai-interview-info/ai-interview-info.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeSubmissionService } from 'src/app/services/resume-submission.service';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {
  applyingFor!: string;
  returnUrl: string | null = null;
  jobApplyForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private dialog: MatDialog, private router: Router, private resumeSubmission: ResumeSubmissionService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.applyingFor = params['role'];
      this.returnUrl = params['returnUrl'] || '/careers';
    });
    this.jobApplyForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // applyingFor: [{ value: this.applyingFor, disabled: true }],
      applyingFor: [this.applyingFor],
      resume: [''],
      checkbox1: [false],
      checkbox2: [false]
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(AIInterviewInfoComponent);

    // Subscribe to the dialog's afterClosed event to perform operations after dialog close
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed', result);
    });
  }
  goBack(): void {
    if (this.returnUrl) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      // Handle case where returnUrl is not available
    }
  }
  onSubmit() {
    if (this.jobApplyForm.valid) {
      console.log(this.jobApplyForm.value);
      this.resumeSubmission.addApplicant(this.jobApplyForm.value).subscribe(
        (response) => {
          console.log('New applicant added:', response);
          this.router.navigateByUrl('/submission-confirmation');
        },
        (error) => {
          console.error('Error adding applicant:', error);
        }
      );
    } else {
      this.jobApplyForm.markAllAsTouched();
    }
  }
}

