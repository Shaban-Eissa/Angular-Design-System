import { Meta, StoryObj } from "@storybook/angular";
import { ChipComponent } from "../app/components/chip/chip.component";

export default {
  title: "Components/Chip",
  component: ChipComponent,
} as Meta;

export const Primary: StoryObj<ChipComponent> = {
  args: {
    label: "Primary Chip",
    variant: "primary",
  },
};

export const Removable: StoryObj<ChipComponent> = {
  args: {
    label: "Removable Chip",
    variant: "secondary",
    removable: true,
  },
};
