import type { Meta, StoryObj } from '@storybook/react';
import { projectItemDummyData } from 'src/dummyData';
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
    category: projectItemDummyData.projectCategory,
    thumbnail: projectItemDummyData.thumbnailFileRes?.projectFileUrl ?? '',
    info: projectItemDummyData.projectPartInformation,
  },
};
