import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'common/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Small: Story = {
  args: {
    sizeType: 'small',
    placeholder: 'text anything!',
  },
};

export const MediumRound: Story = {
  args: {
    sizeType: 'medium',
    isRound: true,
    placeholder: 'text anything!',
  },
};

export const LargeFilled: Story = {
  args: {
    sizeType: 'large',
    isFilled: true,
    placeholder: 'text anything!',
  },
};
