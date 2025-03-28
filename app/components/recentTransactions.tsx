import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
interface RecentTransactionsProps {
  data: RecentTransactionProp[];
}

export function RecentTransactions({ data }: RecentTransactionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, easing: 'ease-out' }}
    >
      <div className="w-[350px] gap-y-2.5 flex flex-col tiny-sb overflow-auto h-[235px] rounded-[25px] font-lato p-[25px] bg-white">
        {data.map((data: RecentTransactionProp, i) => (
          <div>
            <Transaction {...data} key={i} isHighlighted={data.id === i + 1} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

interface RecentTransactionProp {
  id: number;
  desc: string;
  paymentType: 'cash' | 'card' | 'paypal';
  direction: 'in' | 'out';
  date: string;
  amount: string;
  currency: string;
  isHighlighted?: boolean;
}
function Transaction({
  paymentType,
  amount,
  currency,
  direction,
  date,
  desc,
  isHighlighted = false,
}: RecentTransactionProp) {
  return (
    <div
      className="flex items-center relative rounded-md outline-offset-5 focus:outline-2 focus:outline-blue-500"
      tabIndex={0}
    >
      <AnimatePresence initial={false}>
        {isHighlighted && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="highlight"
            className="h-2 w-2 bg-green-500 rounded-full absolute left-0 top-1"
          />
        )}
      </AnimatePresence>
      <img src={`/resources/icons/${paymentType}-deposit.png`} alt={`${paymentType} deposit`} />
      <div className="ms-4 font-inter">
        <div className=" text-base font-medium">{desc}</div>
        <div className="text-light-blue font-normal text-[15px]">{date}</div>
      </div>
      <div
        className={clsx('ml-auto text-base text-right font-medium', {
          'text-emerald-green': direction === 'in',
          'text-vivid-rose': direction === 'out',
        })}
      >
        {direction === 'in' ? '+' : '-'}
        {currency}
        {amount}
      </div>
    </div>
  );
}
