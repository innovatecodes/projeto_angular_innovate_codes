import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home/home.module';

import { ScrollSmoothDirective } from './shared/scroll-smooth.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TermosComponent } from './termos/termos.component';
import { HeaderComponent } from './header/header.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TermosComponent,
    HeaderComponent,
    PoliticaDePrivacidadeComponent,
    PageNotFoundComponent,
    ScrollSmoothDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
