import { Component } from "@angular/core";

@Component({
  selector: "app-file-upload",
  standalone: true,
  imports: [],
  templateUrl: "./file-upload.component.html",
  styleUrl: "./file-upload.component.css",
})
export class FileUploadComponent {
  fileName: string = "";

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    }
  }
}
