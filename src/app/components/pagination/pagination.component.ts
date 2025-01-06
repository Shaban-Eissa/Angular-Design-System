import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.css",
})
export class PaginationComponent {
  @Input() totalPages: number = 5;
  @Input() currentPage: number = 1;

  get pages(): (number | string)[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      if (
        i === 1 ||
        i === this.totalPages ||
        Math.abs(this.currentPage - i) <= 1
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  }

  selectPage(page: number | string) {
    if (typeof page === "number") {
      this.currentPage = page;
    }
  }
}
