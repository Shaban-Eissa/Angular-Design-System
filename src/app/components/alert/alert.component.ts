import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-alert",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./alert.component.html",
  styleUrl: "./alert.component.css",
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class AlertComponent {
  @Input() message: string = "This is an alert!";
  @Input() type: "success" | "warning" | "error" | "info" | "neutral" =
    "success";
  @Input() dismissible: boolean = false;
  @Output() dismiss = new EventEmitter<void>();

  onDismiss() {
    this.dismiss.emit();
  }
}
