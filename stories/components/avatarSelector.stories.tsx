import type { Meta, StoryObj } from '@storybook/react';
import { AvatarSelector } from '~/components/avatarSelector';

const meta: Meta<typeof AvatarSelector> = {
  title: 'Components/Avatar Selector',
  component: AvatarSelector,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
