import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-insert',
  templateUrl: './customer-insert.component.html',
  styleUrls: ['./customer-insert.component.scss']
})
export class CustomerInsertComponent implements OnInit {
  selectedStatus: number;
  form:FormGroup;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      occupation: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      dob: new FormControl(''),
      martialStatus: new FormControl(''),
      income: new FormControl(''),
      expense: new FormControl(''),
      loanCategory: new FormControl(''),
      frequency: new FormControl(''),
      loanAmount: new FormControl('')
    });
    this.selectedStatus = 2;
  }
 

  submit() {
    if (this.form.valid) {
      console.log("============create customer details ====== ",this.form.value);
      alert("success");
      this.form.reset();
      // const { email, password } = this.form.value;
      // this.loginService.login(email,password).subscribe((res:any)=>{
      //   console.log("============login response ====== ", res);
      //   sessionStorage.setItem("token",res.accessToken);
      //   this.route.navigate(['/customers']);
      // }); 
    }
  }
  onBack(){
    this.route.navigate(['/dash/customer']);
  }

}
