import { Meta, StoryObj } from "@storybook/angular";
import { AccordionComponent } from "../app/components/accordion/accordion.component";

export default {
  title: "Components/Accordion",
  component: AccordionComponent,
} as Meta;

export const Default: StoryObj<AccordionComponent> = {
  args: {
    items: [
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
    ],
  },
};
