import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
