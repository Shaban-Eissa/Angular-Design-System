import { Meta, StoryObj } from "@storybook/angular";
import { IconComponent } from "../app/components/icon/icon.component";

export default {
  title: "Components/Icon",
  component: IconComponent,
} as Meta;

export const CheckIcon: StoryObj<IconComponent> = {
  args: {
    name: "check",
  },
};

export const CrossIcon: StoryObj<IconComponent> = {
  args: {
    name: "cross",
  },
};
