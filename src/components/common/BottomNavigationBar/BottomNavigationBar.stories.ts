import type { Meta, StoryObj } from '@storybook/react';

import BottomNavigationBar from './BottomNavigationBar';

const meta: Meta<typeof BottomNavigationBar> = {
  title: 'common/BottomNavigationBar',
  component: BottomNavigationBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomNavigationBar>;

export const Navbar: Story = {};
