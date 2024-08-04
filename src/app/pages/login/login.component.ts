import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ InputTextModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  loginForm!:FormGroup
  headerText: string = "Login";
  ngOnInit(){
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20),this.hasNumberValidator, this.hasSpecialCharactersValidator, this.noWhitespaceValidator])
    })
  }

  checkLogin(){
    if (this.loginForm.value.email === 'vijin@gmail.com' && this.loginForm.value.password === 'vijin@123'){
      localStorage.setItem("logintoken","user")
      this.router.navigate(['/home'])
    }
    else if (this.loginForm.value.email === 'admin@gmail.com' && this.loginForm.value.password === 'admin@123'){
      localStorage.setItem("logintoken","admin")
      this.router.navigate(['/admin'])
    }
    else{
      this.headerText = "Invalid Login"
    }
  }


  hasNumberValidator(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);
    return hasNumber? null : { hasNumber: true };
  }
  hasSpecialCharactersValidator(control: AbstractControl): ValidationErrors | null {
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);
    return hasSpecialChars ? null : { hasSpecialChars: true };
  }
  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const hasWhitespace = /\s/.test(control.value);
    return hasWhitespace? { hasWhitespace: true } : null;
  }
}
