import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('track') track!: ElementRef<HTMLDivElement>;
  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  scrollLeftBtn() {
    this.track.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollRight() {
    this.track.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }

  startDrag(event: MouseEvent | TouchEvent) {
    this.isDown = true;
    this.track.nativeElement.classList.add('active');
    this.startX = this.getX(event) - this.track.nativeElement.offsetLeft;
    this.scrollLeft = this.track.nativeElement.scrollLeft;
  }

  endDrag() {
    this.isDown = false;
    this.track.nativeElement.classList.remove('active');
  }

  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDown) return;
    event.preventDefault();
    const x = this.getX(event) - this.track.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; // velocidade
    this.track.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  private getX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
  }
}
