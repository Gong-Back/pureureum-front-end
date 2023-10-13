import { projectContentDummyData } from 'src/dummyData';

import type { Meta, StoryObj } from '@storybook/react';

import FloatingMenu from './ProjectFilterMenu';

const meta: Meta<typeof FloatingMenu> = {
  title: 'project/FloatingMenu',
  component: FloatingMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FloatingMenu>;

export const Default: Story = {
  args: {
    projectInfo: projectContentDummyData.projectInformation,
  },
};
