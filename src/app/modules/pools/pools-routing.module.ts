import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoolComponent } from './components/pool/pool.component';

const routes: Routes = [
  {
    path: '',
    component: PoolComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoolsRoutingModule { }
