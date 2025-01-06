import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-select",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.css",
})
export class SelectComponent {
  @Input() options: { label: string; value: string }[] = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
}
