import { Sidebar } from '~/layouts/sidebar';
import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <div className="bg-gray-100 border border-gray-200 p-3 w-fit">
        <Story />
      </div>
    ),
    withRouter,
  ],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { useStoryElement: true, path: '*' },
    }),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
