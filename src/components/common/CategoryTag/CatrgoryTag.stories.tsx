import type { Meta, StoryObj } from '@storybook/react';

import CategoryTag from './CategoryTag';

const meta: Meta<typeof CategoryTag> = {
  title: 'common/CategoryTag',
  component: CategoryTag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoryTag>;

export const YouthFarming: Story = {
  args: {
    sizeType: 'small',
    type: 'YOUTH_FARMING',
  },
};

export const FarmingExperience: Story = {
  args: {
    sizeType: 'big',
    type: 'FARMING_EXPERIENCE',
  },
};

export const FarmingHealing: Story = {
  args: {
    sizeType: 'small',
    type: 'FARMING_HEALING',
  },
};

export const Etc: Story = {
  args: {
    sizeType: 'big',
    type: 'ETC',
  },
};
