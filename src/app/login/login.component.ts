import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup; 
  constructor(private loginService:LoginService,
    private formBuilder: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  submit(formValue: any) {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.route.navigate(['/dash/customer']);
      // this.loginService.login(email,password).subscribe((res:any)=>{
      //   console.log("============login response ====== ", res);
      //   sessionStorage.setItem("token",res.accessToken);        
      // }); 
    }
  }
  getError(el) {
    switch (el) {
      case 'email':
        if (this.form.get('email').hasError('required')) {
          return 'Email required';
        }
        break;
      case 'password':
        if (this.form.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }
  
}
