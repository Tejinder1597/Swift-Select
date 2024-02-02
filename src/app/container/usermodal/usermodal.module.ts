import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { JobApplyComponent } from './job-apply/job-apply.component';



@NgModule({
  declarations: [
    JobComponent,
    JobOverviewComponent,
    JobApplyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsermodalModule { }
