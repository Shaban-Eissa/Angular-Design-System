import { Meta, StoryObj } from "@storybook/angular";
import { InputComponent } from "../app/components/input/input.component";

export default {
  title: "Components/Input",
  component: InputComponent,
} as Meta;

export const Default: StoryObj<InputComponent> = {
  args: {
    placeholder: "Enter text",
  },
};
