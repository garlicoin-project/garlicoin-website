import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatDividerModule } from '@angular/material';

import { DownloadsRoutingModule } from './downloads-routing.module';

import { DownloadComponent } from './components/download/download.component';

@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    DownloadsRoutingModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class DownloadsModule { }
