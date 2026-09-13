import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      loadComponent: () =>
        import('./home/home.component').then(m => m.HomeComponent) // lazy load do componente standalone
    },
    {
      path: 'carrinho',
      loadComponent: () =>
        import('./carrinho/carrinho.component').then(m => m.CarrinhoComponent) // lazy load do componente standalone
    },
    {
      path: 'contato',
      loadComponent: () =>
        import('./contato/contato.component').then(m => m.ContatoComponent) // lazy load do componente standalone
    },
  ];
