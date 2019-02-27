import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolsRoutingModule } from './pools-routing.module';
import { PoolComponent } from './components/pool/pool.component';

@NgModule({
  declarations: [PoolComponent],
  imports: [
    CommonModule,
    PoolsRoutingModule
  ]
})
export class PoolsModule { }
