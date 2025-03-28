import { RecentTransactions } from '~/components/recentTransactions';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Widgets/Recent Transactions',
  component: RecentTransactions,
  parameters: {},
  decorators: [
    (Story) => (
      <div className="bg-gray-100 border border-gray-200 p-3 w-fit">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RecentTransactions>;

export default meta;
type Story = StoryObj<typeof meta>;
const TRANSACTIONS = [
  {
    id: 1,
    direction: 'out',
    paymentType: 'card',
    date: '28 January 2021',
    desc: 'Deposit from my Card',
    amount: '850',
    currency: '$',
  },
  {
    id: 53,
    direction: 'in',
    paymentType: 'paypal',
    date: '25 January 2021',
    desc: 'Deposit Paypal',
    amount: '2,500',
    currency: '$',
  },
  {
    id: 20,
    direction: 'in',
    paymentType: 'cash',
    date: '21 January 2021',
    desc: 'Jemi Wilson',
    amount: '5,400',
    currency: '$',
  },
];
export const Primary: Story = {
  args: {
    data: TRANSACTIONS.slice(1),
  },
};

export const Scrollable: Story = {
  args: {
    data: TRANSACTIONS.concat([
      {
        id: 230,
        direction: 'out',
        paymentType: 'paypal',
        date: '21 January 2021',
        desc: 'Jemi Wilson',
        amount: '1,400',
        currency: '$',
      },
    ]),
  },
};
