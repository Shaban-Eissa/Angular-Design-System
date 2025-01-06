import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-breadcrumb",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./breadcrumb.component.html",
  styleUrl: "./breadcrumb.component.css",
})
export class BreadcrumbComponent {
  @Input() items: { label: string; url: string; icon?: string }[] = [
    { label: "Home", url: "/", icon: "🏠" },
    { label: "Products", url: "/products", icon: "📦" },
    { label: "Details", url: "/products/details" },
  ];
}
