import { Meta, StoryObj } from "@storybook/angular";
import { TypographyComponent } from "../app/components/typography/typography.component";

export default {
  title: "Components/Typography",
  component: TypographyComponent,
} as Meta;

export const Heading1: StoryObj<TypographyComponent> = {
  args: {
    text: "Heading 1",
    variant: "h1",
  },
};

export const Heading2: StoryObj<TypographyComponent> = {
  args: {
    text: "Heading 2",
    variant: "h2",
  },
};

export const BodyText: StoryObj<TypographyComponent> = {
  args: {
    text: "This is body text.",
    variant: "body",
  },
};
