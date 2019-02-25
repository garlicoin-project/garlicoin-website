import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './modules/ui/ui.module';

import { AppComponent } from './components/app/app.component';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
