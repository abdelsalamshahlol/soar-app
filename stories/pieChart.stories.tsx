import type { Meta, StoryObj } from '@storybook/react';
import { StatsChart } from '~/components/statsChart';

const meta: Meta<typeof StatsChart> = {
  title: 'Widgets/Stats Chart',
  component: StatsChart,
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
    labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
    series: [30, 15, 35, 20],
  },
};
