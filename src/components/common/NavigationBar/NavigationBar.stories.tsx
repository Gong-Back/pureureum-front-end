import type { Meta, StoryObj } from '@storybook/react';

import NavigationBar from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  title: 'common/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Navbar: Story = {};
