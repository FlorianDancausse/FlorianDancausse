/** angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** end angular */

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/detailled-infos/detailled-infos.module').then(m => m.DetailledInfosModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
