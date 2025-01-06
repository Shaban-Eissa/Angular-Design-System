import { Meta, StoryObj } from "@storybook/angular";
import { BreadcrumbComponent } from "../app/components/breadcrumb/breadcrumb.component";

export default {
  title: "Components/Breadcrumb",
  component: BreadcrumbComponent,
} as Meta;

export const Default: StoryObj<BreadcrumbComponent> = {
  args: {
    items: [
      { label: "Home", url: "/", icon: "🏠" },
      { label: "Products", url: "/products", icon: "📦" },
      { label: "Details", url: "/products/details" },
    ],
  },
};
