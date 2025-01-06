import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-switch",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./switch.component.html",
  styleUrl: "./switch.component.css",
})
export class SwitchComponent {
  @Input() label: string = "Switch";
  @Input() checked: boolean = false;
}
