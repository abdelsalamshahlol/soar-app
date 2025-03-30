import type { Route } from './+types/home';
import { AvatarSelector } from '~/components/avatarSelector';
import { InputField } from '~/components/inputField';
import { Button } from '~/components/button';
import { DateField } from '~/components/dateField';
import type { FormEvent } from 'react';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'SOAR | Settings' }, { name: 'description', content: 'Manage your account' }];
}

export default function Settings() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="px-6 md:px-10 py-6 font-inter">
      <div className="bg-white rounded-[25px] p-[30px]">
        <div className="flex gap-x-[74px]">
          <div className="relative">
            <div className="text-dark-gray text-base leading-none font-medium ml-4">Edit Profile</div>
            <div className="absolute w-[114px] h-[3px] bg-dark-gray -bottom-5.5 left-0 rounded-t-[10px]"></div>
          </div>

          <div className="text-light-blue text-base leading-none font-medium">Preferences</div>

          <div className="text-light-blue text-base leading-none font-medium">Security</div>
        </div>

        <hr className="border-[#F4F5F7] mt-5" />

        <form
          className="flex flex-wrap mt-10 justify-between"
          role="form"
          aria-labelledby="profile-form"
          onSubmit={handleSubmit}
        >
          <AvatarSelector />

          <div className="flex-shrink-1 flex flex-col gap-y-[22px] mb-10">
            <div className="flex justify-between gap-x-7.5z w-full">
              <div className="min-w-[418px]">
                <InputField title="Your Name" placeholder="Charlene Reed" />
              </div>
              <div className="min-w-[418px]">
                <InputField title="User Name" placeholder="Charlene Reed" />
              </div>
            </div>

            <div className="flex justify-between gap-x-7.5">
              <div className="min-w-[418px]">
                <InputField title="Email" placeholder="charlenereed@gmail.com" type="email" />
              </div>
              <div className="min-w-[418px]">
                <InputField title="Password" placeholder="**********" />
              </div>
            </div>

            <div className="flex justify-between gap-x-7.5">
              <div className="min-w-[418px]">
                <DateField title="Date of Birth" placeholder="25 January 1990" />
              </div>
              <div className="min-w-[418px]">
                <InputField title="Present Address" placeholder="San Jose, California, USA" />
              </div>
            </div>

            <div className="flex justify-between gap-x-7.5">
              <div className="min-w-[418px]">
                <InputField title="Permanent Address" placeholder="San Jose, California, USA" />
              </div>
              <div className="min-w-[418px]">
                <InputField title="City" placeholder="San Jose" />
              </div>
            </div>

            <div className="flex justify-between gap-x-7.5">
              <div className="min-w-[418px]">
                <InputField title="Postal Code" placeholder="45962" />
              </div>
              <div className="min-w-[418px]">
                <InputField title="Country" placeholder="USA" />
              </div>
            </div>

            <Button type="submit" text="Save" className="ml-auto" />
          </div>
        </form>
      </div>
    </div>
  );
}
