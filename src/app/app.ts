import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { MenuComponent } from './menu/menu.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, CommonModule, CarrosselComponent, MenuComponent, CarrinhoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('luminous_essence');
}
