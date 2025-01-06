import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class CardComponent {
  @Input() title: string = "Card Title";
  @Input() content: string = "This is the card content.";
}
