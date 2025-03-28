import type { Meta, StoryObj } from '@storybook/react';
import { ActivityChart } from '~/components/activityChart';

const meta: Meta<typeof ActivityChart> = {
  title: 'Widgets/Activity Chart',
  component: ActivityChart,
  decorators: [
    (Story) => (
      <div className="bg-gray-100 border border-gray-200 p-3 w-fit">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
      {
        name: 'Deposit',
        data: [200, 100, 250, 50, 150, 200, 300],
      },
      {
        name: 'Withdraw',
        data: [500, 100, 150, 350, 50, 100, 700],
      },
    ],
  },
};

export const OneSet: Story = {
  args: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
      {
        name: 'Withdraw',
        data: [50, 300, 450, 350, 250, 600, 200],
      },
    ],
  },
};
