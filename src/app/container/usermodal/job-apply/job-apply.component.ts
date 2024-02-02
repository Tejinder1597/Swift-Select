import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {
  applyingFor!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.applyingFor = params['role'];
    });
  }

}
