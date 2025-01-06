import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-avatar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./avatar.component.html",
  styleUrl: "./avatar.component.css",
})
export class AvatarComponent {
  @Input() src: string = "https://via.placeholder.com/150";
  @Input() alt: string = "Avatar";
  @Input() status: "online" | "offline" | null = null;
}
