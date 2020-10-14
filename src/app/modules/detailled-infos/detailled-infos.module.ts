/** angular */
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
/** end angular */

/** classes */
import { DetailledInfosComponent } from './detailled-infos.component';
import { DetailledInfosRoutingModule } from './detailled-infos.module.routing';
/** end classes */

@NgModule({
  declarations: [DetailledInfosComponent],
  imports: [
    DetailledInfosRoutingModule,
    MatIconModule
  ],
})
export class DetailledInfosModule { }
