import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashComponent } from './dash.component';
import { CustomerComponent } from './customer/customer.component';
const routes: Routes = [
    {
        path: '',
        component: DashComponent, 
        // canActivate: [HomeGuard],
        children: [
            { path: '', component: CustomerComponent },
            // {
            //     path: 'customers',
            //     loadChildren: './customers/customers.module#CustomersModule'
            // }           
            { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
            { path: 'customer-insert', loadChildren: () => import('./customer-insert/customer-insert.module').then(m => m.CustomerInsertModule) },
            { path: 'customer-details', loadChildren: () => import('./customer-details/customer-details.module').then(m => m.CustomerDetailsModule) },                        
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DashRoutingModule { }
