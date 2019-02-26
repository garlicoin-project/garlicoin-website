import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadsRoutingModule } from './downloads-routing.module';

import { DownloadComponent } from './components/download/download.component';

@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    DownloadsRoutingModule
  ]
})
export class DownloadsModule { }
