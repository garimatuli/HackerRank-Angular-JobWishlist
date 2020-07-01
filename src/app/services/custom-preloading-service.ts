import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CustomPreloadingService implements PreloadingStrategy {
  preload(route: Route, load: Function):    Observable<any> {
    return route.data && route.data.preload ? load() : of(null); }
}


// https://angular.io/guide/router#custom-preloading-strategy
