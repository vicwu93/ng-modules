import { NgModule } from '@angular/core';
import { YgoComponent } from './components/ygo/ygo.component';
import { YgoService } from '../services/ygo.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [SharedModule],
  providers: [YgoService],
  declarations: [YgoComponent],
  exports: [YgoComponent],
})
export class YgoModule {}
