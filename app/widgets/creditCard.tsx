import { clsx } from 'clsx';
export interface CreditCardProps {
  balance: string;
  currency: string;
  cardHolder: string;
  cardNumber: string;
  cardLogo: string;
  expiry: string;
  theme: 'dark' | 'light';
}

export function CreditCard({
  balance,
  currency,
  cardHolder,
  cardNumber,
  expiry,
  theme,
  cardLogo = '/resources/icons/mastercard-1.png',
}: CreditCardProps) {
  return (
    <div
      className={clsx(
        'w-[350px] h-[235px] rounded-[25px]  overflow-hidden font-lato',
        theme === 'dark'
          ? 'bg-[linear-gradient(107.38deg,_#5B5A6F_2.61%,_#000000_101.2%)] text-white'
          : 'bg-white border border-[rgba(223,234,242,1)]'
      )}
    >
      <div className="pt-6 pl-[26px] pr-[24px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-1">
            <span
              className={clsx('text-xs font-normal leading-none', theme === 'dark' ? 'text-white' : 'text-light-blue')}
            >
              Balance
            </span>
            <span
              className={clsx(
                'text-xl font-semibold leading-none',
                theme === 'dark' ? 'text-white' : 'text-slate-blue'
              )}
            >
              {currency}
              {balance || '-'}
            </span>
          </div>
          <div>
            <img
              src={theme === 'dark' ? '/resources/icons/chip-white.png' : '/resources/icons/chip-dark.png'}
              alt="Credit card chip"
              width={35}
              height={35}
            />
          </div>
        </div>

        <div className="flex justify-between mt-[33px]">
          <div className=" flex flex-col gap-y-1">
            <span
              className={clsx(
                'text-xs font-normal leading-none',
                theme === 'dark' ? ' text-semi-transparent-gray' : 'text-light-blue'
              )}
            >
              CARD HOLDER
            </span>
            <span className={clsx('text-[15px] font-semibold leading-none', { 'text-slate-blue': theme === 'light' })}>
              {cardHolder}
            </span>
          </div>
          <div className=" flex flex-col gap-y-1">
            <span
              className={clsx(
                'text-xs font-normal leading-none',
                theme === 'dark' ? ' text-semi-transparent-gray' : 'text-light-blue'
              )}
            >
              VALID THRU
            </span>
            <span className={clsx('text-[15px] font-semibold leading-none', { 'text-slate-blue': theme === 'light' })}>
              {expiry}
            </span>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'mt-[36px]  flex justify-between items-center h-[70px] pl-[26px] pr-[24px]',
          theme === 'dark'
            ? 'bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.15)_0%,_rgba(255,_255,_255,_0)_100%)]'
            : 'border-t border-[rgba(223,234,242,1)]'
        )}
      >
        <div className={clsx('font-semibold text-[22px]', { 'text-slate-blue': theme === 'light' })}>{cardNumber}</div>
        <div>
          <img src={cardLogo} alt="Credit card provider logo" width={44} height={30} />
        </div>
      </div>
    </div>
  );
}
