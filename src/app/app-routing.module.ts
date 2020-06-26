import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomPreloadingService} from './services/custom-preloading-service';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'jobs' , loadChildren: './feature-job/feature-job.module#FeatureJobModule', data: { preload: true }},
  { path: 'places' , loadChildren: './feature-place/feature-place.module#FeaturePlaceModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService }
    // pre-loading is to pre-load all lazily loaded modules using {preloadingStrategy: PreloadAllModules } above
    // a specific module can also be preloaded
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* Pre-loading is a strategy that allows for modules in Angular to be loaded as soon as possible.
 * Modules can be pre-loaded either all at the same time, or a select few, or when a custom event happens.
 * If we wanted to pre-load some modules, and did not want to pre-load others, we would follow the following strategy:
 * 1. Give our route unique data(i.e. preload: true) to be used within our custom pre- loading function.
 * 2. Create a custom pre-loading function, that makes use of our unique data.
 * 3. Pass in custom pre-loading as a provider to the preloadingStrategy key.
 */
/* https://angular.io/guide/router#custom-preloading-strategy
 * https://codeburst.io/preload-angular-modules-on-demand-c7a3310a0c5b
 * https://medium.com/@adrianfaciu/custom-preloading-strategy-for-angular-modules-b3b5c873681a
 */
