import { Meta, StoryObj } from "@storybook/angular";
import { AlertComponent } from "../app/components/alert/alert.component";

export default {
  title: "Components/Alert",
  component: AlertComponent,
} as Meta;

export const Success: StoryObj<AlertComponent> = {
  args: {
    message: "Success alert!",
    type: "success",
  },
};

export const Warning: StoryObj<AlertComponent> = {
  args: {
    message: "Warning alert!",
    type: "warning",
  },
};

export const Error: StoryObj<AlertComponent> = {
  args: {
    message: "Error alert!",
    type: "error",
  },
};

export const Info: StoryObj<AlertComponent> = {
  args: {
    message: "Info alert!",
    type: "info",
  },
};

export const Neutral: StoryObj<AlertComponent> = {
  args: {
    message: "Neutral alert!",
    type: "neutral",
  },
};

export const Dismissible: StoryObj<AlertComponent> = {
  args: {
    message: "Dismissible alert!",
    type: "success",
    dismissible: true,
  },
};
