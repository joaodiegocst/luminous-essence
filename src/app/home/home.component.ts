import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { MenuComponent } from '../menu/menu.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterOutlet, RouterLink, CommonModule, CarrosselComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']      // plural correto
})
export class HomeComponent {}
