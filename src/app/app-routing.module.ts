import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    // Defines a route at "/" with the WrapperComponent
    path: '',
    component: WrapperComponent,
    // Defines child routes to be displayed in WrapperComponent's <router-outlet>
    children: [
      {
        // Defines a lazy loaded route at "/" with the home module
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      // New routes go before the catch all
      {
        // Redirects all unmatched routes to home
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  // Sets up a RouterModule with the above routes and a preloading strategy of start prefetching everything after page initialization
  // This allows for snappy initial load and snappy router navigation
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
