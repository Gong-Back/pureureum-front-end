import type { Meta, StoryObj } from '@storybook/react';
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
    info: {
      title: 'title',
      introduction:
        '그런데 스프링 프레임워크는 기능도 너무 많고 광범위해서 어디서부터 어떻게 시작해야 할지 막막합니다.또 너무 많은 유연성을 제공해서, 어떤 기술들을 함께 사용해야 할지 선택하기 어렵습니다. 기능이 점점 증가하면서 더 많은 설정들이 필요해지기 시작했습니다. ',
      owner: 'owner',
      facility: 'facility',
      projectStartDate: '2023-03-10',
      projectEndDate: '2023-03-15',
    },
  },
};
