import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../app/components/button/button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
} as Meta;

export const Primary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
};

export const Success: StoryObj<ButtonComponent> = {
  args: {
    label: 'Success',
    variant: 'success',
  },
};

export const Destructive: StoryObj<ButtonComponent> = {
  args: {
    label: 'Destructive',
    variant: 'destructive',
  },
};

export const Info: StoryObj<ButtonComponent> = {
  args: {
    label: 'Info',
    variant: 'info',
  },
};

export const OutlinePrimary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Outline Primary',
    variant: 'outline-primary',
  },
};

export const OutlineSecondary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Outline Secondary',
    variant: 'outline-secondary',
  },
};

export const OutlineSuccess: StoryObj<ButtonComponent> = {
  args: {
    label: 'Outline Success',
    variant: 'outline-success',
  },
};

export const OutlineDestructive: StoryObj<ButtonComponent> = {
  args: {
    label: 'Outline Destructive',
    variant: 'outline-destructive',
  },
};

export const OutlineInfo: StoryObj<ButtonComponent> = {
  args: {
    label: 'Outline Info',
    variant: 'outline-info',
  },
};

export const Rounded: StoryObj<ButtonComponent> = {
  args: {
    label: 'Rounded Button',
    variant: 'primary',
    rounded: true,
  },
};

export const Disabled: StoryObj<ButtonComponent> = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const WithLeftIcon: StoryObj<ButtonComponent> = {
  args: {
    label: 'With Left Icon',
    variant: 'primary',
    leftIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-button [label]="label" [variant]="variant" [leftIcon]="leftIcon">
        <span leftIcon>
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
      </app-button>
    `,
  }),
};

export const WithRightIcon: StoryObj<ButtonComponent> = {
  args: {
    label: 'With Right Icon',
    variant: 'primary',
    rightIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-button [label]="label" [variant]="variant" [rightIcon]="rightIcon">
        <span rightIcon>
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
      </app-button>
    `,
  }),
};

export const IconOnly: StoryObj<ButtonComponent> = {
  args: {
    variant: 'primary',
    iconOnly: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-button [variant]="variant" [iconOnly]="iconOnly">
        <span>
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
      </app-button>
    `,
  }),
};