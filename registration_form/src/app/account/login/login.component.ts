import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formSubmit = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.generateLoginForm();
  }

  generateLoginForm() {
    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.formSubmit = true;
    if (this.loginForm.valid) {
      setTimeout(() => {
        if (this.loginForm.controls['password'].value === 'Suraj@1234') {
          this.router.navigate(['/app/registration/form']);
        }
        this.formSubmit = false;
      }, 2000);
    }
  }
}
