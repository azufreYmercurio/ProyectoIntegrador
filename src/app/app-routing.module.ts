import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ComponentesAngular/home/home.component';
import { LoginComponent } from './ComponentesAngular/login/login.component';
import {IngresoUSerComponent} from "./ComponentesAngular/ingreso-user/ingreso-user.component";


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'ingreso-user',component: IngresoUSerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
