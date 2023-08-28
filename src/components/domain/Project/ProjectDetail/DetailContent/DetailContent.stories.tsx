import type { Meta, StoryObj } from '@storybook/react';
import DetailContent from './DetailContent';

const meta: Meta<typeof DetailContent> = {
  title: 'project/ProjectDetail/DetailContent',
  component: DetailContent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DetailContent>;

export const Default: Story = {
  args: {},
};
