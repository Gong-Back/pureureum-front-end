import { useState } from 'react';
import Image from 'next/image';
import Text from '@/components/common/Text';
import CategoryTag from '@/components/common/CategoryTag';
import LocationIconSvg from '@/assets/icons/locationIcon.svg';
import CalendarIconSvg from '@/assets/icons/calendarIcon.svg';
import GrassIconSvg from '@/assets/icons/grassIcon.svg';

import { ProjectItemType } from '@/constants/types';
import { COLORS } from '@/constants/styles';

import * as style from './ProjectItem.style';

export interface ProjectItemProps extends Omit<ProjectItemType, 'projectId'> {}

// TODO 멤버 모집률을 반영한 GrassIcon 상태 변화는 추후에 수정하겠습니다
const ProjectItem = ({
  type,
  thumbnail,
  title,
  introduction,
  onwerName,
  currentRecruit,
  totalRecruit,
  location,
  startDate,
  endDate,
}: ProjectItemProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const onHover = () => setIsHovering((prev) => !prev);

  return (
    <style.Wrapper onMouseOver={onHover} onMouseOut={onHover}>
      <style.ThumbnailWrap>
        {isHovering && (
          <style.HoveringContentWrap>
            <Text
              fontStyleName="body2R"
              color={COLORS.grayscale.white}
              className="intro-text"
            >
              {introduction}
            </Text>
            <Text fontStyleName="body2R" color={COLORS.grayscale.white}>
              {onwerName}
            </Text>
          </style.HoveringContentWrap>
        )}
        <style.TagsWrap>
          <CategoryTag sizeType="small" type={type} className="category-tag" />
          <style.MemberStatusTag>
            <Text fontStyleName="body3" color={COLORS.grayscale.gray700}>
              {currentRecruit} / {totalRecruit}
            </Text>
            <GrassIconSvg />
          </style.MemberStatusTag>
        </style.TagsWrap>

        <Image src={thumbnail} layout="fill" style={{ borderRadius: 20 }} />
      </style.ThumbnailWrap>
      <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray700}>
        {title}
      </Text>
      <style.InfoWrap>
        <LocationIconSvg color={COLORS.primary.greenDefault} />
        <Text fontStyleName="body2R" color={COLORS.primary.greenDefault}>
          {location}
        </Text>
      </style.InfoWrap>
      <style.InfoWrap>
        <CalendarIconSvg color={COLORS.grayscale.gray500} />
        <Text fontStyleName="body2R" color={COLORS.grayscale.gray500}>
          {startDate.replaceAll('-', '.')} ~ {endDate.replaceAll('-', '.')}
        </Text>
      </style.InfoWrap>
    </style.Wrapper>
  );
};

export default ProjectItem;
