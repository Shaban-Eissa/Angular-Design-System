import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-icon",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./icon.component.html",
  styleUrl: "./icon.component.css",
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class IconComponent {
  @Input() name: "check" | "cross" = "check"; // Add more icon names as needed
}
