import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YgoComponent } from './components/ygo/ygo.component';

const routes: Routes = [{ path: '', component: YgoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YgoRoutingModule {}
