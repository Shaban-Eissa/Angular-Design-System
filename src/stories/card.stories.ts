import { Meta, StoryObj } from "@storybook/angular";
import { CardComponent } from "../app/components/card/card.component";

export default {
  title: "Components/Card",
  component: CardComponent,
} as Meta;

export const Default: StoryObj<CardComponent> = {
  args: {
    title: "Card Title",
    content: "This is the card content.",
  },
};
