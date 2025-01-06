import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.css",
})
export class CarouselComponent {
  items: string[] = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];
  offset: number = 0;

  prev() {
    this.offset += 800;
    if (this.offset > 0) this.offset = -((this.items.length - 1) * 800);
  }

  next() {
    this.offset -= 800;
    if (this.offset < -((this.items.length - 1) * 800)) this.offset = 0;
  }
}
