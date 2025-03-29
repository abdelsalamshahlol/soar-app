import type { Meta, StoryObj } from '@storybook/react';
import { QuickTransfers } from '~/widgets/quickTransfers';

const meta: Meta<typeof QuickTransfers> = {
  title: 'Widgets/Quick Transfers',
  component: QuickTransfers,
  decorators: [
    (Story) => (
      <div className="bg-gray-100 border border-gray-200 p-3 w-fit">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof QuickTransfers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    contacts: [
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
    ],
  },
};

export const SingleContact: Story = {
  args: {
    contacts: [
      {
        id: 203,
        name: 'Livia Bator',
        imgSrc: '/resources/imgs/contact-1.png',
        title: 'CEO',
      },
    ],
  },
};
