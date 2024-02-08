import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { FormsModule } from '@angular/forms';
import { AIInterviewInfoComponent } from './ai-interview-info/ai-interview-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmissionConfirmationComponent } from './submission-confirmation/submission-confirmation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    JobComponent,
    JobOverviewComponent,
    JobApplyComponent,
    AIInterviewInfoComponent,
    SubmissionConfirmationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class UsermodalModule { }
