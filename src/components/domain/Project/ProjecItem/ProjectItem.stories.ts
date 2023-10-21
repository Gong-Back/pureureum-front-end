import { projectItemDummyData } from 'src/dummyData';

import type { Meta, StoryObj } from '@storybook/react';

import ProjectItem from './ProjectItem';

const meta: Meta<typeof ProjectItem> = {
  title: 'project/ProjectItem',
  component: ProjectItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectItem>;

export const Default: Story = {
  args: {
    thumbnail: projectItemDummyData.thumbnailFileRes?.projectFileUrl ?? '',
    info: projectItemDummyData.projectPartInformation,
  },
};
