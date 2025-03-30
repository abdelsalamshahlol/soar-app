import { clsx } from 'clsx';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

interface NavProps {
  classList?: string;
}

const pageTitles: Record<string, string> = {
  '/': 'Overview',
  '/settings': 'Settings',
};

export function Nav({ classList }: NavProps) {
  const location = useLocation();
  const [title, setTitle] = useState<string>('Overview');

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || 'Oopss!';
    setTitle(currentTitle);
  }, [location.pathname]);

  return (
    <div className={clsx(classList)}>
      <div
        className={clsx(
          'bg-white w-full flex items-center justify-between font-inter py-5 px-10 h-[100px] md:border-b border-barely-gray'
        )}
      >
        <button className="md:hidden">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 13C18 13.5523 17.4801 14 16.8387 14L1.16129 14C0.519928 14 -6.78526e-08 13.5523 -4.37114e-08 13C-1.95703e-08 12.4477 0.519928 12 1.16129 12L16.8387 12C17.4801 12 18 12.4477 18 13Z"
              fill="#343C6A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 7C18 7.55228 17.5523 8 17 8L1 8C0.447716 8 -6.78525e-08 7.55228 -4.37114e-08 7C-1.95703e-08 6.44771 0.447716 6 1 6L17 6C17.5523 6 18 6.44772 18 7Z"
              fill="#343C6A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 0.999998C18 1.55228 17.4801 2 16.8387 2L1.16129 2C0.519928 2 -6.78526e-08 1.55229 -4.37115e-08 1C-1.95704e-08 0.447719 0.519928 3.94468e-06 1.16129 3.7939e-06L16.8387 -5.07615e-08C17.4801 -2.61145e-07 18 0.447714 18 0.999998Z"
              fill="#343C6A"
            />
          </svg>
        </button>

        <div className="font-semibold text-[28px] leading-none text-slate-blue">{title}</div>

        <div className="relative flex items-center">
          <input
            type="search"
            className="hidden md:block w-[255px] h-[50px] bg-light-gray rounded-[40px] pl-12 pr-4 outline-none placeholder-placeholder-blue focus:ring-2 focus:ring-blue-400"
            placeholder="Search for something"
            aria-label="Search"
            tabIndex={0}
          />
          <svg
            className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-gray"
            aria-hidden="true"
          >
            <use xlinkHref="resources/icons/nav/sprite.svg#icon-search" />
          </svg>

          <button
            className="hidden md:block ml-[30px] rounded-full w-[50px] h-[50px] bg-light-gray cursor-pointer outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Settings"
            tabIndex={0}
          >
            <svg className="w-[25px] h-[25px] mx-auto" aria-hidden="true">
              <use xlinkHref="resources/icons/nav/sprite.svg#icon-cog" />
            </svg>
          </button>

          <button
            className="hidden md:block ml-[30px] rounded-full w-[50px] h-[50px] bg-light-gray cursor-pointer outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Notifications"
            tabIndex={0}
          >
            <svg className="w-[25px] h-[25px] mx-auto" aria-hidden="true">
              <use xlinkHref="resources/icons/nav/sprite.svg#icon-bell" />
            </svg>
          </button>

          <div className="md:ml-[30px] rounded-full overflow-hidden h-[60px] w-[60px] outline-none focus:ring-2 focus:ring-blue-400">
            <img src="resources/imgs/avatar.png" alt="User avatar" width={60} height={60} tabIndex={0} />
          </div>
        </div>
      </div>

      <div className="flex md:hidden justify-center relative pt-2 max-w-10/12 mx-auto">
        <div className="flex items-center flex-row-reverse bg-light-gray w-10/12 h-[50px] rounded-[40px] outline-none focus-within:ring-2 focus-within:ring-blue-400">
          <input
            type="search"
            className="w-10/12 h-[50px] rounded-[40px] bg-light-gray pl-12 pr-4 outline-none placeholder-placeholder-blue"
            placeholder="Search for something"
            aria-label="Search"
            tabIndex={0}
          />
          <svg className="w-5 h-5 text-dark-gray" aria-hidden="true">
            <use xlinkHref="resources/icons/nav/sprite.svg#icon-search" />
          </svg>
        </div>
      </div>
    </div>
  );
}
