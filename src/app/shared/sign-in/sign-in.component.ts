import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  showSignup: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Form is valid, handle submission here
      console.log(this.loginForm.value);
    } else {
      // Form is invalid, mark fields as touched to display validation messages
      this.loginForm.markAllAsTouched();
    }
    console.log("Logging in...");
  }

  onSignup() {
    if (this.signupForm.valid) {
      // Form is valid, handle submission here
      console.log(this.signupForm.value);
    } else {
      // Form is invalid, mark fields as touched to display validation messages
      this.signupForm.markAllAsTouched();
    }
    console.log("Signing up...");
  }

  showSignupForm() {
    this.showSignup = true;
  }

  showLoginForm() {
    this.showSignup = false;
  }

}


