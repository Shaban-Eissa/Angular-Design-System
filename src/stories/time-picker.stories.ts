import { Meta, StoryObj } from "@storybook/angular";
import { TimePickerComponent } from "../app/components/time-picker/time-picker.component";

export default {
  title: "Components/TimePicker",
  component: TimePickerComponent,
} as Meta;

export const Default: StoryObj<TimePickerComponent> = {
  args: {},
};
