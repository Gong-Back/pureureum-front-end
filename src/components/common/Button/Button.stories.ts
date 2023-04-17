import type { Meta, StoryObj } from '@storybook/react';
import { COLORS } from '@/constants/styles';
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
    children: 'button',
  },
};

export const MediumRound: Story = {
  args: {
    sizeType: 'medium',
    children: 'button',
    isRound: true,
  },
};

export const LargeTransparent: Story = {
  args: {
    sizeType: 'large',
    children: 'button',
    backgroundColor: 'transparent',
    borderColor: COLORS.primary.greenDefault,
    textColor: COLORS.primary.greenDefault,
  },
};
