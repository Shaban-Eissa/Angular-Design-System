import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-dropdown",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.css",
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class DropdownComponent {
  isOpen = false;
  selectedOption: string | null = null;
  options = ["Option 1", "Option 2", "Option 3"];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }
}
