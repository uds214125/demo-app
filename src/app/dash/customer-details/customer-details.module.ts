import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsRoutingModule } from './customer-details-routing.module';
import { CustomerDetailsComponent } from './customer-details.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomerDetailsComponent],
  imports: [
    // CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CustomerDetailsRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerDetailsModule { }
