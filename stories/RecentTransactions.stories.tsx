import { type RecentTransactionProp, RecentTransactions } from '~/widgets/recentTransactions';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RecentTransactions> = {
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
};

export default meta;
type Story = StoryObj<typeof meta>;

const TRANSACTIONS: RecentTransactionProp[] = [
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
    data: TRANSACTIONS.slice(1), // Only show part of the transactions
  },
};

export const Scrollable: Story = {
  args: {
    data: [
      ...TRANSACTIONS,
      {
        id: 230,
        direction: 'out',
        paymentType: 'paypal',
        date: '21 January 2021',
        desc: 'Jemi Wilson',
        amount: '1,400',
        currency: '$',
      },
    ],
  },
};
