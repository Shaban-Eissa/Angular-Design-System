import { Meta, StoryObj } from "@storybook/angular";
import { BadgeComponent } from "../app/components/badge/badge.component";

export default {
  title: "Components/Badge",
  component: BadgeComponent,
} as Meta;

export const Primary: StoryObj<BadgeComponent> = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

export const Secondary: StoryObj<BadgeComponent> = {
  args: {
    label: "Secondary",
    variant: "secondary",
  },
};

export const Danger: StoryObj<BadgeComponent> = {
  args: {
    label: "Danger",
    variant: "danger",
  },
};

export const Success: StoryObj<BadgeComponent> = {
  args: {
    label: "Success",
    variant: "success",
    icon: true,
  },
};

export const Warning: StoryObj<BadgeComponent> = {
  args: {
    label: "Warning",
    variant: "warning",
    icon: true,
  },
};

export const Info: StoryObj<BadgeComponent> = {
  args: {
    label: "Info",
    variant: "info",
    icon: true,
  },
};

export const Neutral: StoryObj<BadgeComponent> = {
  args: {
    label: "Neutral",
    variant: "neutral",
    icon: true,
  },
};

export const Dismissible: StoryObj<BadgeComponent> = {
  args: {
    label: "Dismissible",
    variant: "primary",
    dismissible: true,
  },
};

export const Square: StoryObj<BadgeComponent> = {
  args: {
    label: "Square Badge",
    variant: "primary",
    pill: false,
  },
};
