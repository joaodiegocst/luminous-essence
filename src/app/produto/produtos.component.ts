import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterLink, CommonModule, MenuComponent],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'] 
})
export class ProdutosComponent {}
