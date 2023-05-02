import Text from '@/components/common/Text';

import * as style from './ProjectTypeIcon.style';

// FIXME : 각 활동에 맞는 영문을 어떻게 설정해야 할지도 추후 논의가 필요해보임.
const ProjectTypeInfo = {
  volunteer: {
    title: '청년 농활',
    backgroundColor: '#FFE2B1',
    color: '#6A4300',
    icon: '👨‍🌾',
  },
  healing: {
    title: '농촌 힐링',
    backgroundColor: '#FFE9E9',
    color: '#B80000',
    icon: '🧘‍♀️',
  },
  experiment: {
    title: '농촌 체험',
    backgroundColor: '#E2FFBC',
    color: '#2E5200',
    icon: '🌾',
  },
  others: {
    title: '기타',
    backgroundColor: '#ECECEC',
    color: '#3B3D3B',
    icon: '🌿',
  },
};
type ProjectType = 'volunteer' | 'healing' | 'experiment' | 'others';

interface ProjectTypeIconProps {
  /** 프로젝트 타입 ('volunteer', 'healing', 'experiment', 'others') */
  projectType: ProjectType;
  /** 높이를 기준으로 분류되는 사이즈 타입 (각각 높이: 50 / 34px, default: big) */
  sizeType?: 'small' | 'big';
  className?: string;
}

const ProjectTypeIcon = ({
  projectType,
  className,
  sizeType = 'big',
}: ProjectTypeIconProps) => {
  const { title, backgroundColor, color, icon } = ProjectTypeInfo[projectType];
  const isBigSize = sizeType === 'big';
  return (
    <style.Wrapper
      backgroundColor={backgroundColor}
      sizeType={sizeType}
      className={className}
    >
      <Text color={color} fontStyleName={isBigSize ? 'body1B' : 'body3'}>
        {title}
      </Text>
      {isBigSize && <style.IconWrap>{icon}</style.IconWrap>}
    </style.Wrapper>
  );
};

export default ProjectTypeIcon;
