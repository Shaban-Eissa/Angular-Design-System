import { Meta, StoryObj } from "@storybook/angular";
import { DatePickerComponent } from "../app/components/date-picker/date-picker.component";

export default {
  title: "Components/DatePicker",
  component: DatePickerComponent,
} as Meta;

export const Default: StoryObj<DatePickerComponent> = {
  args: {},
};
