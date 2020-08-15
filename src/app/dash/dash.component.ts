import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `
})
export class DashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
