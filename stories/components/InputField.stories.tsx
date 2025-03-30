import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '~/components/inputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/Input Field',
  component: InputField,
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
    title: 'Your Name',
    placeholder: 'Charlene Reed',
    id: 'name-input',
    type: 'text',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Your Name',
    placeholder: 'Charlene Reed',
    id: 'name-input',
    type: 'text',
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    title: 'Password',
    placeholder: '**********',
    id: 'name-input',
    type: 'password',
  },
};
