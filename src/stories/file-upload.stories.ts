import { Meta, StoryObj } from "@storybook/angular";
import { FileUploadComponent } from "../app/components/file-upload/file-upload.component";

export default {
  title: "Components/FileUpload",
  component: FileUploadComponent,
} as Meta;

export const Default: StoryObj<FileUploadComponent> = {
  args: {},
};
