import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobOverview } from 'src/app/interfaces/job-overview';
import { JobOverviewService } from 'src/app/services/job-overview.service';

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.component.html',
  styleUrls: ['./job-overview.component.scss']
})
export class JobOverviewComponent implements OnInit {

  jobDetail!: JobOverview;

  constructor(private router: Router, private route: ActivatedRoute, private jobOverview: JobOverviewService) { }

  ngOnInit(): void {
    const jobIdParam = this.route.snapshot.paramMap.get('id');
    if (jobIdParam !== null) {
      const jobId = +jobIdParam;
      this.jobOverview.getJobDetailById(jobId).subscribe((jobDetail: JobOverview) => {
        this.jobDetail = jobDetail;
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/careers']);
  }

  // applyNow(): void {
  //   this.router.navigate(['/job-form']);
  // }
  applyNow(): void {
    if (this.jobDetail) {
      this.router.navigate(['/job-form'], { queryParams: { role: this.jobDetail.positionOverview, returnUrl: this.router.url } });
    } else {
      // Handle case where jobDetail is not available
    }
  }

}
