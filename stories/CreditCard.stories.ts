import { CreditCard } from '~/components/creditCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CreditCard> = {
  title: 'Widgets/Credit Card',
  component: CreditCard,
  parameters: {},
} satisfies Meta<typeof CreditCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    balance: '5,756',
    currency: '$',
    theme: 'dark',
    cardHolder: 'Eddy Cusuma',
    expiry: '12/22',
    cardNumber: '3778 **** **** 1234',
    cardLogo: '/resources/icons/mastercard-2.png',
  },
};

export const Light: Story = {
  args: {
    balance: '5,756',
    currency: '$',
    theme: 'light',
    cardHolder: 'Eddy Cusuma',
    expiry: '12/22',
    cardNumber: '3778 **** **** 1234',
    cardLogo: '/resources/icons/mastercard-2.png',
  },
};
