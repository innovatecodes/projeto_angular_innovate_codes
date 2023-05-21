import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermosComponent } from './termos/termos.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'termos', component: TermosComponent },
  {
    path: 'politica-de-privacidade',
    component: PoliticaDePrivacidadeComponent,
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
