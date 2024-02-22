import { NgModule } from '@angular/core';
import { YgoComponent } from './components/ygo/ygo.component';
import { YgoService } from '../services/ygo.service';
import { SharedModule } from '../shared/shared.module';
import { YgoRoutingModule } from './ygo-routing.module';

@NgModule({
  imports: [SharedModule, YgoRoutingModule],
  providers: [YgoService],
  declarations: [YgoComponent],
})
export class YgoModule {}
