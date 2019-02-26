import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {
    // Defines a route at "/" with the RootComponent
    path: '',
    component: RootComponent,
    // Defines child routes to be displayed in RootComponent's <router-outlet>
    children: [
      {
        // Defines a lazy loaded route at "/" with the home module
        path: 'home',
        data: { state: 'home' },
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        // Defines a lazy loaded route at "/downloads" with the downloads module
        path: 'downloads',
        data: { state: 'downloads' },
        loadChildren: './modules/downloads/downloads.module#DownloadsModule'
      },
      {
        // Defines a lazy loaded route at "/guide" with the guide module
        path: 'guide',
        data: { state: 'guide' },
        loadChildren: './modules/guide/guide.module#GuideModule'
      },
      {
        // Defines a lazy loaded route at "/pools" with the pool module
        path: 'pools',
        data: { state: 'pools' },
        loadChildren: './modules/pools/pools.module#PoolsModule'
      },
      // New routes go before the catch all
      {
        // Redirects all unmatched routes to home
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  // Sets up a RouterModule with the above routes and a preloading strategy of start prefetching everything after page initialization
  // This allows for snappy initial load and snappy router navigation
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
