import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from '../carrossel/carrossel.component';

@Component({
  selector: 'app-home',
  standalone: true,              // 🔑 marca como standalone
  imports: [CommonModule, CarrosselComponent],       // importa módulos necessários
  templateUrl: './home.html',
  styleUrls: ['./home.css']      // plural correto
})
export class Home {}
