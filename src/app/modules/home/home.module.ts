import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { LandingComponent } from './components/landing/landing.component';
import { MatGridListModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class HomeModule { }
