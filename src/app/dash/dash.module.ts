import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashRoutingModule } from './dash-routing.module';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { HeaderComponent } from '../header/header.component';
import { MaterialModule } from '../material.module';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [DashComponent, HeaderComponent],
  imports: [
    CommonModule,
    CustomerModule,
    MaterialModule,
    DashRoutingModule    
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashModule { }
