import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from 'src/app/shared/mainlayout/mainlayout.component';
import { JobComponent } from './job/job.component';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { JobApplyComponent } from './job-apply/job-apply.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsermodalRoutingModule { }
