import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInsertRoutingModule } from './customer-insert-routing.module';
import { CustomerInsertComponent } from './customer-insert.component';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [CustomerInsertComponent],
  imports: [ 
    CustomerInsertRoutingModule,
    ReactiveFormsModule, 
    MaterialModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerInsertModule { }
