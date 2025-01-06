import { Meta, StoryObj } from "@storybook/angular";
import { TabsComponent } from "../app/components/tabs/tabs.component";

export default {
  title: "Components/Tabs",
  component: TabsComponent,
} as Meta;

export const Default: StoryObj<TabsComponent> = {
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3"],
  },
};
