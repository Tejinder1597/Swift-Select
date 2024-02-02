import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AIInterviewInfoComponent } from '../ai-interview-info/ai-interview-info.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {
  applyingFor!: string;
  returnUrl: string | null = null;
  constructor(private route: ActivatedRoute, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.applyingFor = params['role'];
      this.returnUrl = params['returnUrl'] || '/careers';
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
}
