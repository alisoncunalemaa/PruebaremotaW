import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule}  from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { CrudpublicacionesComponent } from './components/publicaciones/crudpublicaciones/crudpublicaciones.component';
import { ListarpublicacionesComponent } from './components/publicaciones/listarpublicaciones/listarpublicaciones.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PublicacionesComponent,
    CrudpublicacionesComponent,
    ListarpublicacionesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
