import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
/*
in standalone have to set provideHttpClient for use http client
With the recent changes in angular there is no app.module file.
So with the new structure you will have to upate it in app.config file and ad
*/
import {provideHttpClient} from '@angular/common/http'


import {routes} from './app.routes';
import {AuthUserService} from "./services/auth-user.service";
import {ProductService} from "./services/product.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() , // for injection http client
    {provide : AuthUserService},
    {provide : ProductService},
  ]
};
