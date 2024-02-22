import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './components/customers/customers.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersDetailComponent } from './components/customers-detail/customers-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      { path: '', component: CustomersListComponent },
      { path: ':id', component: CustomersDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
