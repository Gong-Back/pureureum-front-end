import type { Meta, StoryObj } from '@storybook/react';

import AccountForm from './AccountForm';

const meta: Meta<typeof AccountForm> = {
  title: 'register/AccountForm',
  component: AccountForm,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 400 }}>{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof AccountForm>;

export const Default: Story = {
  args: {},
};
