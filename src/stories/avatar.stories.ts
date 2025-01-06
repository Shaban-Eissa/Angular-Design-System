import { Meta, StoryObj } from "@storybook/angular";
import { AvatarComponent } from "../app/components/avatar/avatar.component";

export default {
  title: "Components/Avatar",
  component: AvatarComponent,
} as Meta;

export const Default: StoryObj<AvatarComponent> = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Avatar",
  },
};

export const Online: StoryObj<AvatarComponent> = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Avatar",
    status: "online",
  },
};

export const Offline: StoryObj<AvatarComponent> = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Avatar",
    status: "offline",
  },
};
