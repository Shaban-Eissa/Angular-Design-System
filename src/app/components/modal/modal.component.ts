import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.css",
})
export class ModalComponent {
  @Input() title: string = "Modal Title";
  @Input() content: string = "This is the modal content.";
  isOpen: boolean = true;

  closeModal() {
    this.isOpen = false;
  }
}
