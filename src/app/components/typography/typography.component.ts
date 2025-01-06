import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-typography",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./typography.component.html",
  styleUrl: "./typography.component.css",
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class TypographyComponent {
  @Input() text: string = "Hello, World!";
  @Input() variant: "h1" | "h2" | "h3" | "body" = "body";
}
