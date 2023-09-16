import { projectsDummydata } from 'src/dummyData';

import type { Meta, StoryObj } from '@storybook/react';

import ProjectList from './ProjectList';

const meta: Meta<typeof ProjectList> = {
  title: 'project/ProjectList',
  component: ProjectList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectList>;

export const Default: Story = {
  args: {
    data: projectsDummydata,
  },
};
