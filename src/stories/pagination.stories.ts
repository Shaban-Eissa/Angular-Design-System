import { Meta, StoryObj } from "@storybook/angular";
import { PaginationComponent } from "../app/components/pagination/pagination.component";

export default {
  title: "Components/Pagination",
  component: PaginationComponent,
} as Meta;

export const Default: StoryObj<PaginationComponent> = {
  args: {
    totalPages: 10,
    currentPage: 5,
  },
};
