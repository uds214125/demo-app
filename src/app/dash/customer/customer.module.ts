import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { MaterialModule } from '../../material.module';
import { SessionService } from '../../services'; 
import { AuthService } from '../../auth';
@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CustomerRoutingModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SessionService, AuthService]
})
export class CustomerModule { }
