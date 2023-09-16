import { COLORS } from '@/constants/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    sizeType: 'small',
    isFilled: true,
    children: 'button',
  },
};

export const MediumRound: Story = {
  args: {
    sizeType: 'medium',
    children: 'button',
    isFilled: false,
    isRound: true,
  },
};

export const LargeTransparent: Story = {
  args: {
    sizeType: 'large',
    children: 'button',
    themeColor: COLORS.primary.default,
  },
};
