/** angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** end angular */

/** classes */
import { DetailledInfosComponent } from './detailled-infos.component';
/** end classes */

const routes: Routes = [
  {
    path: '',
    component: DetailledInfosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailledInfosRoutingModule {}
