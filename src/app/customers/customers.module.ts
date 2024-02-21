import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CustomersComponent } from './components/customers/customers.component';
import { CustomersDetailComponent } from './components/customers-detail/customers-detail.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersService } from './customers.service';

@NgModule({
  imports: [SharedModule, CustomersRoutingModule],
  declarations: [
    CustomersComponent,
    CustomersDetailComponent,
    CustomersListComponent,
  ],
  providers: [CustomersService],
})
export class CustomersModule {}
