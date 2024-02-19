// login.component.ts
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/interceptors/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Form initialization
  }
  onSubmit() {
    if (this.formLogin && this.formLogin.valid) {
      // Call login method from AuthService with form data
      const { username, password } = this.formLogin.value;
      this.authService.login(username, password).subscribe(
        (response: any) => {
          this.router.navigate(['/']);
          this.formLogin.reset();
        },
        error => {
          // Handle login error
          console.error(error);
          this.errorMessage = error.message || 'An error occurred during login.';
        }
      );
    }
  }
}
