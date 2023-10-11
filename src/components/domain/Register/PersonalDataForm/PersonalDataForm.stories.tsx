import type { Meta, StoryObj } from '@storybook/react';

import PersonalDataForm from './PersonalDataForm';

const meta: Meta<typeof PersonalDataForm> = {
  title: 'register/PersonalDataForm',
  component: PersonalDataForm,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 400 }}>{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof PersonalDataForm>;

export const Default: Story = {
  args: {},
};
