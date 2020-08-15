import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onInsert(){
    this.route.navigate(["/dash/customer-details"])
  }
}
