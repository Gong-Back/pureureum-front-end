import type { Meta, StoryObj } from '@storybook/react';

import DropdownMenu from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'common/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const DefaultTitle: Story = {
  args: {
    menuList: ['인기순', '최신순', '댓글순'],
    selectedMenu: '인기순',
  },
};
