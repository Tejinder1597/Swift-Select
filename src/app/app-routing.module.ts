import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './shared/mainlayout/mainlayout.component';
import { JobComponent } from './container/usermodal/job/job.component';
import { JobOverviewComponent } from './container/usermodal/job-overview/job-overview.component';
import { JobApplyComponent } from './container/usermodal/job-apply/job-apply.component';

const routes: Routes = [
  {
    path: "",
    component: MainlayoutComponent,
    children: [
      {
        path: "careers",
        component: JobComponent
      },
      {
        path: "careers-overview/:id",
        component: JobOverviewComponent
      },
      {
        path: "job-form",
        component: JobApplyComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
