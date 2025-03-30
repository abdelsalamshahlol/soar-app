import { clsx } from 'clsx';

interface NavProps {
  classList?: string;
}

export function Nav({ classList }: NavProps) {
  return (
    <div
      className={clsx(
        'bg-white w-full flex items-center justify-between font-inter py-5 px-10 h-[100px] border-b border-barely-gray',
        classList
      )}
    >
      <div className="font-semibold text-[28px] leading-none text-slate-blue">Overview</div>

      <div className="relative flex items-center">
        <input
          type="search"
          className="w-[255px] h-[50px] bg-light-gray rounded-[40px] pl-12 pr-4 outline-none placeholder-placeholder-blue focus:ring-2 focus:ring-blue-400"
          placeholder="Search for something"
          aria-label="Search"
          tabIndex={0}
        />
        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-gray" aria-hidden="true">
          <use xlinkHref="/public/resources/icons/nav/sprite.svg#icon-search" />
        </svg>

        <button
          className="ml-[30px] rounded-full w-[50px] h-[50px] bg-light-gray cursor-pointer outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Settings"
          tabIndex={0}
        >
          <svg className="w-[25px] h-[25px] mx-auto" aria-hidden="true">
            <use xlinkHref="/public/resources/icons/nav/sprite.svg#icon-cog" />
          </svg>
        </button>

        <button
          className="ml-[30px] rounded-full w-[50px] h-[50px] bg-light-gray cursor-pointer outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Notifications"
          tabIndex={0}
        >
          <svg className="w-[25px] h-[25px] mx-auto" aria-hidden="true">
            <use xlinkHref="/public/resources/icons/nav/sprite.svg#icon-bell" />
          </svg>
        </button>

        <div className="ml-[30px] rounded-full overflow-hidden h-[60px] w-[60px] outline-none focus:ring-2 focus:ring-blue-400">
          <img src="/public/resources/imgs/avatar.png" alt="User avatar" width={60} height={60} tabIndex={0} />
        </div>
      </div>
    </div>
  );
}
