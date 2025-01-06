import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tabs",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tabs.component.html",
  styleUrl: "./tabs.component.css",
})
export class TabsComponent {
  @Input() tabs: string[] = ["Tab 1", "Tab 2", "Tab 3"];
  activeTab: number = 0;

  selectTab(index: number) {
    this.activeTab = index;
  }
}
