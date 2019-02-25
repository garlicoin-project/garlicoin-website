import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ]
})
export class UiModule {
}
