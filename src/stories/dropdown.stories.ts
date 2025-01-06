import { Meta, StoryObj } from "@storybook/angular";
import { DropdownComponent } from "../app/components/dropdown/dropdown.component";

export default {
  title: "Components/Dropdown",
  component: DropdownComponent,
} as Meta;

export const Default: StoryObj<DropdownComponent> = {
  args: {},
};
