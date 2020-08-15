import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,
    private route: Router) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.route.navigate(['/dash/customer']);
      // this.loginService.login(email,password).subscribe((res:any)=>{
      //   console.log("============login response ====== ", res);
      //   sessionStorage.setItem("token",res.accessToken);        
      // }); 
    }
  }
  
}
