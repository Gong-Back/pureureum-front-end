import type { Meta, StoryObj } from '@storybook/react';

import ProjectStatusTag from './ProjectStatusTag';

const meta: Meta<typeof ProjectStatusTag> = {
  title: 'common/ProjectStatusTag',
  component: ProjectStatusTag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectStatusTag>;

export const Recruiting: Story = {
  args: {
    sizeType: 'small',
    status: 'RECRUITING',
  },
};

export const Completed: Story = {
  args: {
    sizeType: 'big',
    status: 'COMPLETED',
  },
};

export const Preparing: Story = {
  args: {
    sizeType: 'small',
    status: 'PREPARING',
  },
};
