import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ComponentesAngular/login/login.component';
import { HomeComponent } from './ComponentesAngular/home/home.component';
import { DatosNuvoProComponent } from './ComponentesAngular/datos-nuvo-pro/datos-nuvo-pro.component';
import { AgregepathdeNuevosComponetesComponent } from './ComponentesAngular/agregepathde-nuevos-componetes/agregepathde-nuevos-componetes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DatosNuvoProComponent,
    AgregepathdeNuevosComponetesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
