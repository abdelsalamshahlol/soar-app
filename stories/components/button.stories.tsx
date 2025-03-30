import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/components/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Save',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Save',
    disabled: true,
  },
};
