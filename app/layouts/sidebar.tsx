import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { clsx } from 'clsx';
interface NavProps {
  classList?: string;
}

const navItems = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'home',
  },
  {
    name: 'Transactions',
    path: '/transactions',
    icon: 'transactions',
  },
  {
    name: 'Accounts',
    path: '/accounts',
    icon: 'accounts',
  },
  {
    name: 'Investments',
    path: '/investments',
    icon: 'investments',
  },
  {
    name: 'Credit Cards',
    path: '/credit-cards',
    icon: 'cards',
  },
  {
    name: 'Loans',
    path: '/loans',
    icon: 'loans',
  },
  {
    name: 'Services',
    path: '/services',
    icon: 'services',
  },
  {
    name: 'My Privileges',
    path: '/privileges',
    icon: 'privileges',
  },
  {
    name: 'Setting',
    path: '/settings',
    icon: 'settings',
  },
];

export function Sidebar({ classList }: NavProps) {
  const [active, setActive] = useState<string>('/');
  const [indicatorTop, setIndicatorTop] = useState<number>(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const activeItem = navRef.current?.querySelector('.active');

    if (activeItem) {
      setIndicatorTop(activeItem.offsetTop);
    }
  }, [active]);

  return (
    <aside
      className={clsx(
        'bg-white flex flex-col w-[250px] border-r border-barely-gray font-inter px-[38px] pt-[34px] h-screen',
        classList
      )}
    >
      <div className="flex items-center gap-x-2.5 pb-16">
        <img src="/resources/icons/app-icon.png" alt="Soar App" width={35} height={35} />
        <span className="font-extrabold text-[25px] leading-none text-slate-blue">Soar Task</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 relative" ref={navRef}>
        {/* Floating Indicator */}
        <div
          className="absolute -left-[2.355rem] w-1.5 h-[60px] bg-dark-gray transition-all duration-300 rounded-r-[10px]"
          style={{ top: indicatorTop - 20 }}
        />

        <ul className="space-y-10">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActive(item.path)}
              className={clsx(
                'flex font-medium text-lg leading-none gap-x-[26px] items-center cursor-pointer transition-all ease-out',
                {
                  'text-dark-gray-tint': active !== item.path,
                  'text-dark-gray active': active == item.path,
                }
              )}
            >
              <svg className="w-[25px] h-[25px] fill-current">
                <use xlinkHref={`resources/icons/nav/sprite.svg#icon-${item.icon}`} />
              </svg>

              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
