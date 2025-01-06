import { Meta, StoryObj } from "@storybook/angular";
import { SelectComponent } from "../app/components/select/select.component";

export default {
  title: "Components/Select",
  component: SelectComponent,
} as Meta;

export const Default: StoryObj<SelectComponent> = {
  args: {},
};
