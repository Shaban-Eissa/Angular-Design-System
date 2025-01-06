import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-accordion",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./accordion.component.html",
  styleUrl: "./accordion.component.css",
  animations: [
    trigger("slideInOut", [
      state("closed", style({ height: "0", opacity: 0, overflow: "hidden" })),
      state("open", style({ height: "*", opacity: 1, overflow: "hidden" })),
      transition("closed <=> open", animate("300ms ease-in-out")),
    ]),
  ],
})
export class AccordionComponent {
  @Input() items: { title: string; content: string; isOpen: boolean }[] = [
    {
      title: "Accordion Item 1",
      content: "This is the content for item 1.",
      isOpen: false,
    },
    {
      title: "Accordion Item 2",
      content: "This is the content for item 2.",
      isOpen: false,
    },
    {
      title: "Accordion Item 3",
      content: "This is the content for item 3.",
      isOpen: false,
    },
  ];

  toggle(index: number) {
    this.items[index].isOpen = !this.items[index].isOpen;
    this.items.forEach((item, i) => {
      if (i !== index) {
        item.isOpen = false;
      }
    });
  }
}
