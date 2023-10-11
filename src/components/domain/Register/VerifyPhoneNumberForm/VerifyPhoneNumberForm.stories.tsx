import type { Meta, StoryObj } from '@storybook/react';

import VerifyPhoneNumberForm from './VerifyPhoneNumberForm';

const meta: Meta<typeof VerifyPhoneNumberForm> = {
  title: 'register/VerifyPhoneNumberForm',
  component: VerifyPhoneNumberForm,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 400 }}>{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof VerifyPhoneNumberForm>;

export const Default: Story = {
  args: {},
};
