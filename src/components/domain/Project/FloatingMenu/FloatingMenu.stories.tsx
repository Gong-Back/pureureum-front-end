import type { Meta, StoryObj } from '@storybook/react';
import { projectContentDummyData } from 'src/dummyData';
import FloatingMenu from './FloatingMenu';

const meta: Meta<typeof FloatingMenu> = {
  title: 'project/ProjectDetail/FloatingMenu',
  component: FloatingMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FloatingMenu>;

export const Default: Story = {
  args: {
    info: projectContentDummyData.projectInformation,
  },
};
