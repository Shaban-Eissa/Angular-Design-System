import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-badge",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./badge.component.html",
  styleUrl: "./badge.component.css",
})
export class BadgeComponent {
  @Input() label: string = "Badge";
  @Input() variant:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "neutral" = "primary";
  @Input() size: "small" | "medium" | "large" = "small";
  @Input() pill: boolean = true;
  @Input() dismissible: boolean = false;
  @Input() icon: boolean = false;
  @Output() dismiss = new EventEmitter<void>();

  onDismiss() {
    this.dismiss.emit();
  }
}
