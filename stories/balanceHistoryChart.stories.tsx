import type { Meta, StoryObj } from '@storybook/react';
import { Index } from '~/widgets/balanceHistoryChart';

const meta: Meta<typeof Index> = {
  title: 'Widgets/Balance History Chart',
  component: Index,
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
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    series: [
      {
        // name: 'Deposit',
        data: [200, 400, 250, 800, 150, 200, 750, 500],
      },
    ],
  },
};
