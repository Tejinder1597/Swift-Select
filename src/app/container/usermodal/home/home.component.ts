import { Component, OnInit } from '@angular/core';
import { textTransition } from '../text-transition.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [textTransition]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToAnotherComponent() {
    this.router.navigate(['/careers']);
  }
}
