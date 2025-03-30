import type { Route } from './+types/home';
import { CreditCard, type CreditCardProps } from '~/widgets/creditCard';
import { SectionHeader } from '~/components/sectionHeader';
import { RecentTransactions } from '~/widgets/recentTransactions';
import { ActivityChart } from '~/widgets/activityChart';
import { QuickTransfers } from '~/widgets/quickTransfers';
import { Index as BalanceHistoryChart } from '~/widgets/balanceHistoryChart';
import { StatsChart } from '~/components/statsChart';
export function meta({}: Route.MetaArgs) {
  return [{ title: 'SOAR | Home' }, { name: 'description', content: 'Welcome to React Router!' }];
}

const cardInfo: CreditCardProps = {
  balance: '5,756',
  currency: '$',
  theme: 'dark',
  cardHolder: 'Eddy Cusuma',
  expiry: '12/22',
  cardNumber: '3778 **** **** 1234',
  cardLogo: '/resources/icons/mastercard-2.png',
};

const recentTransactions = [
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

const activityChart = {
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
};

const contacts = [
  {
    id: 203,
    name: 'Livia Bator',
    imgSrc: '/resources/imgs/contact-1.png',
    title: 'CEO',
  },
  {
    id: 20,
    name: 'Randy Press',
    imgSrc: '/resources/imgs/contact-2.png',
    title: 'Director',
  },
  {
    id: 43,
    name: 'Workman',
    imgSrc: '/resources/imgs/contact-3.png',
    title: 'Designer',
  },
];

const balanceHistroy = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
  series: [
    {
      // name: 'Deposit',
      data: [200, 400, 250, 800, 150, 200, 750, 500],
    },
  ],
};

const statsChart = {
  labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
  series: [30, 15, 35, 20],
};
export default function Home() {
  return (
    <>
      <div className="flex flex-wrap gap-x-[30px] gap-y-6 px-6 md:px-10 py-6  max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between w-full gap-y-5.5">
          <section className="w-full lg:w-[730px]">
            <div className="flex justify-between">
              <SectionHeader title="My Cards" />
              <a href="#" className="font-inter font-semibold text-base leading-none text-slate-blue">
                See all
              </a>
            </div>
            <div className="flex flex-nowrap gap-[30px] overflow-x-auto lg:overflow-hidden">
              <div className="">
                <CreditCard {...cardInfo} />
              </div>
              <div className="">
                <CreditCard {...cardInfo} theme={'light'} />
              </div>
            </div>
          </section>

          <section className="w-full lg:w-[350px]">
            <SectionHeader title="Recent Transaction" />
            <RecentTransactions data={recentTransactions} />
          </section>
        </div>

        <div className="flex justify-between flex-wrap w-full gap-y-5.5">
          <section className="w-full lg:w-[730px]">
            <SectionHeader title="Weekly Activity" />
            <ActivityChart {...activityChart} />
          </section>

          <section className="w-full lg:w-[350px]">
            <SectionHeader title="Expense Statistics" />
            <StatsChart {...statsChart} />
          </section>
        </div>

        <div className="flex justify-between flex-wrap w-full gap-y-5.5">
          <section className="w-full xl:w-[445px]">
            <SectionHeader title="Quick Transfer" />
            <QuickTransfers contacts={contacts} />
          </section>

          <section className="w-full xl:w-[635px]">
            <SectionHeader title="Balance History" />
            <BalanceHistoryChart {...balanceHistroy} />
          </section>
        </div>
      </div>
    </>
  );
}
