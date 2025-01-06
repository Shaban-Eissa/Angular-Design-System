import { Meta, StoryObj } from "@storybook/angular";
import { ModalComponent } from "../app/components/modal/modal.component";

export default {
  title: "Components/Modal",
  component: ModalComponent,
} as Meta;

export const Default: StoryObj<ModalComponent> = {
  args: {
    title: "Modal Title",
    content: "This is the modal content.",
  },
};
