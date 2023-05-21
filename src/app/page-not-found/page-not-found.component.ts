import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-header>
      <!-- Header -->
      <header>
        <a id="logo" routerLink="/" aria-label="Página inicial"
          ><img
            src="../../assets/images/innovate_codes-logo.svg"
            width="120"
            height="29.45"
            alt="Logo"
        /></a>
      </header>
    </app-header>
    <div class="container-fluid py-3 nth-of-type-odd">
      <app-subtitle>
        <h2>{{ error404 }}</h2>
        <p>
          Desculpe, a página que você está tentando acessar não foi encontrada!
        </p>
      </app-subtitle>
    </div>
  `,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  error404 = 'Erro 404';
}
