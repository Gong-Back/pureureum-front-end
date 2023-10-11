import { COLORS, FONT_STYLE_NAME } from '@/constants/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'common/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const DefaultTitle: Story = {
  args: {
    color: COLORS.primary.default,
    fontStyleName: FONT_STYLE_NAME.title,
    children: 'hi we are prr',
  },
};

export const DefaultBody: Story = {
  args: {
    color: COLORS.primary.default,
    fontStyleName: FONT_STYLE_NAME.body1B,
    children: 'hi we are prr',
  },
};

export const Caption: Story = {
  args: {
    color: COLORS.caption,
    fontStyleName: FONT_STYLE_NAME.caption,
    children: 'hi we are prr',
  },
};
