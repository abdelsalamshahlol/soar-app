import { create } from 'zustand';
import { RECENT_TRANSACTIONS } from '~/util/const';
import type { RecentTransactionProp } from '~/widgets/recentTransactions';
import { formatMoney } from '~/util';

export interface AccountStore {
  balance: number;
  transactions: RecentTransactionProp[];
  sendMoney: (amount: number) => void;
}

export const useAccountStore = create<AccountStore>((set, get) => ({
  balance: 1000,
  transactions: RECENT_TRANSACTIONS,
  sendMoney: (amount: number) => {
    if (amount > get().balance) {
      console.error('Insufficient funds');
      return;
    }

    set((state) => ({
      balance: state.balance - amount,
      transactions: [
        {
          id: Date.now().toString(),
          amount: formatMoney(amount),
          date: Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()),
          desc: 'Cash payment',
          paymentType: 'card',
          direction: 'out',
          currency: '$',
        },
        ...state.transactions,
      ],
    }));
  },
}));
