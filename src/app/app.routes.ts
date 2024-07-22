import { Routes } from '@angular/router';
import {OptionsComponent} from "./components/options/options.component";
import {LoginComponent} from "./components/login/login.component";
import {ManageRoutesGuard} from "./secure/manage-routes.guard";
import {UpdateProductComponent} from "./components/update-product/update-product.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateProductComponent , canActivate: [ManageRoutesGuard]},
  { path: 'update/:id', component: UpdateProductComponent , canActivate: [ManageRoutesGuard] },
  { path: 'options', component: OptionsComponent , canActivate: [ManageRoutesGuard] },
  { path: '**', redirectTo: '/options', pathMatch: 'full' }
];
