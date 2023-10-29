import { ProjectStatusInfo } from '@/constants/project';
import { ProjectStatusType } from '@/constants/types';

import Text from '../Text';
import * as style from './ProjectStatusTag.style';

export interface ProjectStatusTagProps {
  sizeType: 'small' | 'big';
  status: ProjectStatusType;
  className?: string;
  onClick?: () => void;
}

const ProjectStatusTag = ({
  sizeType,
  status,
  className,
  onClick,
}: ProjectStatusTagProps) => {
  const isBigSize = sizeType === 'big';
  return (
    <style.Wrapper
      isBigSize={isBigSize}
      className={className}
      onClick={onClick}
    >
      <Text fontStyleName={isBigSize ? 'body1B' : 'body3'} className="text">
        {ProjectStatusInfo[status].title}
      </Text>
    </style.Wrapper>
  );
};

export default ProjectStatusTag;
