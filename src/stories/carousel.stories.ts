import { Meta, StoryObj } from "@storybook/angular";
import { CarouselComponent } from "../app/components/carousel/carousel.component";

export default {
  title: "Components/Carousel",
  component: CarouselComponent,
} as Meta;

export const Default: StoryObj<CarouselComponent> = {
  args: {},
};
