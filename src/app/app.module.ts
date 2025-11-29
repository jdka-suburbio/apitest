import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ConcursoComponent } from './components/pages/concurso/concurso.component';
import { MenuComponent } from './components/commons/menu/menu.component';
import { SpacexComponent } from './components/pages/spacex/spacex.component';

import { provideHttpClient } from '@angular/common/http';
import { FirebaseComponent } from './components/pages/firebase/firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ConcursoComponent,
    MenuComponent,
    SpacexComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
