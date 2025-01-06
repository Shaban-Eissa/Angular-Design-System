import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-chip",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./chip.component.html",
  styleUrl: "./chip.component.css",
})
export class ChipComponent {
  @Input() label: string = "Chip";
  @Input() variant: "primary" | "secondary" = "primary";
  @Input() removable: boolean = false;
  @Output() remove = new EventEmitter<void>();

  onRemove() {
    this.remove.emit();
  }
}
