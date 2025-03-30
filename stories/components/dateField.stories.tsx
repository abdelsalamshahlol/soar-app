import type { Meta, StoryObj } from '@storybook/react';
import { DateField } from '~/components/dateField';

const meta: Meta<typeof DateField> = {
  title: 'Components/Date Field',
  component: DateField,
  parameters: {},
  decorators: [
    (Story) => (
      <div className="bg-gray-100 border border-gray-200 p-3 w-2/4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Date of Birth',
    placeholder: '25 January 1990',
    id: 'date-input',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Date of Birth',
    id: 'date-input',
    disabled: true,
  },
};
