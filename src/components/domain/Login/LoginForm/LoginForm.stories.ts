import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'login/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {},
};
