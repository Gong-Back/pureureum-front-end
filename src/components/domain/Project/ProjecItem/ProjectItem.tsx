import { useState } from 'react';
import Image from 'next/image';
import Text from '@/components/common/Text';
import CategoryTag from '@/components/common/CategoryTag';
import LocationIconSvg from '@/assets/icons/locationIcon.svg';
import CalendarIconSvg from '@/assets/icons/calendarIcon.svg';
import GrassIconSvg from '@/assets/icons/grassIcon.svg';

import { CategoryType, ProjectBasicInfoType } from '@/constants/types';
import { COLORS } from '@/constants/styles';

import * as style from './ProjectItem.style';

export interface ProjectItemProps {
  category: CategoryType;
  thumbnail: string;
  info: ProjectBasicInfoType;
}

// TODO 멤버 모집률을 반영한 GrassIcon 상태 변화는 추후에 수정하겠습니다
// TODO FormatUtils 교체 예정
const ProjectItem = ({ category, thumbnail, info }: ProjectItemProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const onHover = () => setIsHovering((prev) => !prev);

  const { city, county, district } = info.facilityAddress;
  const location = `${city} ${county} ${district}`;

  const { projectStartDate: s, projectEndDate: e } = info;
  const duartion = `${s.replaceAll('-', '.')} ~ ${e.replaceAll('-', '.')}`;

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
              이곳은 한줄 소개 공간인데 백엔드에서 스프린트 3주차에 주시겠다고
              그래가지구 못넣었어요 이건 더미데이터에요
            </Text>
            <Text fontStyleName="body2R" color={COLORS.grayscale.white}>
              {info.title}
            </Text>
          </style.HoveringContentWrap>
        )}
        <style.TagsWrap>
          <CategoryTag
            type={category}
            sizeType="small"
            className="category-tag"
          />
          <style.MemberStatusTag>
            <Text fontStyleName="body3" color={COLORS.grayscale.gray700}>
              {info.recruits} / {info.totalRecruits}
            </Text>
            <GrassIconSvg />
          </style.MemberStatusTag>
        </style.TagsWrap>

        <Image src={thumbnail} layout="fill" style={{ borderRadius: 20 }} />
      </style.ThumbnailWrap>
      <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray700}>
        {info.title}
      </Text>
      <style.InfoWrap>
        <LocationIconSvg color={COLORS.primary.greenDefault} />
        <Text fontStyleName="body2R" color={COLORS.primary.greenDefault}>
          {`${location}`}
        </Text>
      </style.InfoWrap>
      <style.InfoWrap>
        <CalendarIconSvg color={COLORS.grayscale.gray500} />
        <Text fontStyleName="body2R" color={COLORS.grayscale.gray500}>
          {duartion}
        </Text>
      </style.InfoWrap>
    </style.Wrapper>
  );
};

export default ProjectItem;
