import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from '../services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule, 
    MaterialModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [ LoginService ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
