import { Meta, StoryObj } from "@storybook/angular";
import { SwitchComponent } from "../app/components/switch/switch.component";

export default {
  title: "Components/Switch",
  component: SwitchComponent,
} as Meta;

export const Default: StoryObj<SwitchComponent> = {
  args: {
    label: "Switch",
    checked: false,
  },
};
