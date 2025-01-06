import { Meta, StoryObj } from "@storybook/angular";
import { ToastComponent } from "../app/components/toast/toast.component";

export default {
  title: "Components/Toast",
  component: ToastComponent,
} as Meta;

export const Success: StoryObj<ToastComponent> = {
  args: {
    message: "Success toast!",
    type: "success",
  },
};

export const Error: StoryObj<ToastComponent> = {
  args: {
    message: "Error toast!",
    type: "error",
  },
};
