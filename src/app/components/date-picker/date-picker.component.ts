import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-date-picker",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./date-picker.component.html",
  styleUrl: "./date-picker.component.css",
})
export class DatePickerComponent {
  selectedDate: string = "";
}
