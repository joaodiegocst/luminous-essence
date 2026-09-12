import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
  imagens: string[] = [
    'assets/image/vela1.jpeg',
    'assets/image/vela2.jpeg',
    'assets/image/vela3.jpeg',
    'assets/image/vela4.jpeg',
    'assets/image/vela5.jpeg',
    'assets/image/vela6.jpeg',
    'assets/image/difusor1.jpeg',
    'assets/image/sabonete1.jpeg',
    'assets/image/sabonete2.jpeg'
  ];

  index = 0;

  next() {
    this.index = (this.index + 1) % this.imagens.length;
  }

  prev() {
    this.index = (this.index - 1 + this.imagens.length) % this.imagens.length;
  }
}
