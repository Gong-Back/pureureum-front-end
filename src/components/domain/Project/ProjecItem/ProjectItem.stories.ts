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
    type: 'YOUTH_FARMING',
    thumbnail:
      'https://t4.ftcdn.net/jpg/02/01/78/01/240_F_201780104_hetXS26W8alnsbDKbpnr4sVizJfiO12w.jpg',
    title: '우리 봄에 감자 농장 체험해요!',
    location: '고양시 송산읍 감자농장',
    introduction:
      '고양시 송산읍 인근 주민들과 함께 주말 농장을 운영하면서 감자를 가꾸려고 합니다. 제가 왕년에 감자 농사 짬이 있으니 믿고 참여해주세요.',
    onwerName: '홍길동',
    startDate: '2023-03-01',
    endDate: '2023-04-01',
    currentRecruit: 9,
    totalRecruit: 20,
  },
};
