import { Carousel } from 'app/components/carousel';
import { ClientOnly } from '~/widgets/clientOnly';
import { clsx } from 'clsx';
import { type FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface Contact {
  id: number;
  imgSrc: string;
  name: string;
  title: string;
}
interface QuickTransferProps {
  contacts: Array<Contact>;
}
export function QuickTransfers({ contacts }: QuickTransferProps) {
  const [selected, setSelected] = useState<Contact | null>(null);
  const selectContact = (contact: Contact) => {
    setSelected(contact);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, easing: 'ease-out' }}
      className="w-full lg:max-w-[445px] h-[276px] rounded-[25px] font-inter py-[35px] px-[25px]  bg-white"
    >
      <ClientOnly>
        <div className="lg:-ml-9">
          <Carousel>
            {contacts.map((c: Contact, i) => (
              <Contact {...c} isSelected={c.id === selected?.id} onClick={() => selectContact(c)} key={i} />
            ))}
          </Carousel>
        </div>
      </ClientOnly>

      <TransferForm contact={selected} />
    </motion.div>
  );
}

interface ContactProps extends Contact {
  isSelected: boolean;
  onClick?: () => void;
}
export function Contact({ name, title, imgSrc, isSelected = false, onClick }: ContactProps) {
  return (
    <div
      className={clsx('w-4/6 lg:w-auto flex flex-col items-center transition-all duration-300 ease-in-out', {
        'font-bold': isSelected,
      })}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <img src={imgSrc} alt={`${name} contact`} width={70} height={70} />
      <div className="text-dark-gray text-sm lg:text-base pt-[15px] leading-none">{name}</div>
      <div className="text-light-blue text-sm lg:text-[15px] pt-[5px]">{title}</div>
    </div>
  );
}

interface TransferFormProps {
  contact: Contact | null;
}
export function TransferForm({ contact }: TransferFormProps) {
  const [amount, setAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!contact) {
      setError('Select contact first');
      return;
    }

    if (!amount) {
      setError('Enter a valid amount');
      return;
    }

    setError('');
    setLoading(true);

    const id = setTimeout(() => {
      setAmount(null);
      setLoading(false);
      clearTimeout(id);
    }, 1500);
  };

  return (
    <div className="mt-[29px] flex justify-between items-center">
      <div className="text-xs text-light-blue md:text-base leading-none ">Write Amount</div>

      <form
        className="relative rounded-[50px] flex justify-between max-w-4/6 lg:max-w-[265px] w-auto h-[50px] bg-stuble-blue-tint"
        onSubmit={handleSubmit}
      >
        <label htmlFor="amount" className="sr-only">
          Enter amount
        </label>
        <input
          value={amount ? String(amount) : ''}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          type="number"
          id="amount"
          inputMode="numeric"
          className="pl-[30px] text-light-blue leading-none w-8/12 xl:w-[140px] outline-none focus:ring-2 focus:ring-blue-400"
          aria-describedby="send-button"
        />

        <button
          id="send-button"
          disabled={loading}
          type="submit"
          className={clsx(
            'relative flex items-center justify-center rounded-[50px] w-[100px] lg:w-[125px] text-base leading-none font-medium text-white focus:ring-2 focus:ring-blue-400',
            { 'bg-dark-gray': !loading },
            { 'bg-slate-blue': loading }
          )}
          aria-label="Send amount"
        >
          <AnimatePresence>
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="text-white absolute"
              >
                Sending...
              </motion.div>
            ) : (
              <motion.div
                key="send"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute  flex gap-x-2.5 items-center flex-nowrap justify-center"
              >
                Send
                <img src="/resources/icons/paper-plane.png" alt="send icon" width={26} height={23} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {error && <small className="text-red-500 text-xs pt-1 pl-3 absolute top-[3.4rem]">{error}</small>}
      </form>
    </div>
  );
}
