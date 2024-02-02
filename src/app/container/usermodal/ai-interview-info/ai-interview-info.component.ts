import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ai-interview-info',
  templateUrl: './ai-interview-info.component.html',
  styleUrls: ['./ai-interview-info.component.scss']
})
export class AIInterviewInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AIInterviewInfoComponent>) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }
}
