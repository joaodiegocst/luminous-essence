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
export class ProdutosComponent {

  produtos = [
    { nome: 'Pessêgo Champanhe', preco: 'R$ 39,90', imagem: 'assets/image/vela1.jpeg' },
    { nome: 'Blue Ocean', preco: 'R$ 42,90', imagem: 'assets/image/vela2.jpeg' },
    { nome: 'Happy Birthday', preco: 'R$ 44,90', imagem: 'assets/image/vela3.jpeg' },
    { nome: 'Pink Lemonade', preco: 'R$ 36,90', imagem: 'assets/image/vela4.jpeg' },
    { nome: 'Lavanda', preco: 'R$ 38,90', imagem: 'assets/image/vela6.jpeg' },
    { nome: 'Kit Vela + Difusor', preco: 'R$ 59,90', imagem: 'assets/image/difusor1.jpeg' },
    { nome: 'Melancia', preco: 'R$ 19,90', imagem: 'assets/image/sabonete1.jpeg' },
    { nome: 'Maracujá', preco: 'R$ 22,90', imagem: 'assets/image/sabonete2.jpeg' }
  ];

  modalAberto = false;
  imagemSelecionada: string | null = null;

  abrirModal(imagem: string) {
    this.imagemSelecionada = imagem;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.imagemSelecionada = null;
  }

}
