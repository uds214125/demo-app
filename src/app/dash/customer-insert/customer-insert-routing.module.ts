import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerInsertComponent } from './customer-insert.component';
const routes: Routes = [{
  path:'', component:CustomerInsertComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerInsertRoutingModule { }
