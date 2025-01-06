import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class ButtonComponent {
  @Input() label: string = "Button";
  @Input() variant:
    | "primary"
    | "secondary"
    | "success"
    | "destructive"
    | "info"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-destructive"
    | "outline-info" = "primary";
  @Input() rounded: boolean = false;
  @Input() disabled: boolean = false;
  @Input() leftIcon: boolean = false;
  @Input() rightIcon: boolean = false;
  @Input() iconOnly: boolean = false;
}
