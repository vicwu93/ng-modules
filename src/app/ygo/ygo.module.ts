import { NgModule } from '@angular/core';
import { YgoComponent } from './components/ygo.component';
import { YgoService } from './ygo.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [SharedModule],
  providers: [YgoService],
  declarations: [YgoComponent],
  exports: [YgoComponent],
})
export class YgoModule {}
