import { Meta, StoryObj } from "@storybook/angular";
import { TableComponent } from "../app/components/table/table.component";

export default {
  title: "Components/Table",
  component: TableComponent,
} as Meta;

export const Default: StoryObj<TableComponent> = {
  args: {
    headers: ["Name", "Age", "Email"],
    data: [
      ["John Doe", "30", "john@example.com"],
      ["Jane Doe", "25", "jane@example.com"],
    ],
  },
};
