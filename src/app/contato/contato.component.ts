import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, MenuComponent],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']      // plural correto
})
export class ContatoComponent {}
