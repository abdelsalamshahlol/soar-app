import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from '~/layouts/nav';

const meta: Meta<typeof Nav> = {
  title: 'Layout/Navbar',
  component: Nav,
  decorators: [
    (Story) => (
      <div className="bg-gray-100 border border-gray-200 p-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
