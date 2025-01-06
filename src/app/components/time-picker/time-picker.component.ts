import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-time-picker",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./time-picker.component.html",
  styleUrl: "./time-picker.component.css",
})
export class TimePickerComponent {
  selectedTime: string = "";
}
