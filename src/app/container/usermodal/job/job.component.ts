import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/interfaces/job';
import { JobOverviewService } from 'src/app/services/job-overview.service';
import { JobService } from 'src/app/services/job.service';
import { faMapMarkerAlt, faUserClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  mapMarker = faMapMarkerAlt;
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  searchTerm: string = '';
  constructor(private jobService: JobService, private jobOverview: JobOverviewService, private router: Router) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      this.filteredJobs = jobs;
      console.log(this.jobs)
    });

  }
  // openJobDetailDialog(jobId: number): void {
  //   this.jobOverview.getJobDetailById(jobId).subscribe((jobDetail: JobDetail) => {
  //     const dialogRef = this.dialog.open(CareersOverviewComponent, {
  //       width: '600px',
  //       data: jobDetail
  //     });
  //   });
  // }
  goToJobDetail(jobId: number): void {
    this.router.navigate(['/careers-overview', jobId]); // Assuming the route for job detail component is '/job-detail/:id'
  }
  onJobClick(): void {
    this.router.navigate(['/careers-overview']);
  }
  filterJobs(): void {
    console.log('Filtering jobs...');
    console.log('Search term:', this.searchTerm);
    this.filteredJobs = this.jobs.filter(job =>
      job.role.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
    console.log('Filtered jobs:', this.filteredJobs);
  }

}
