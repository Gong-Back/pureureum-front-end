import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CalendarIconSvg from '@/assets/icons/calendarIcon.svg';
import GrassIconSvg from '@/assets/icons/grassIcon.svg';
import LocationIconSvg from '@/assets/icons/locationIcon.svg';
import CategoryTag from '@/components/common/CategoryTag';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { CategoryType, ProjectPartInfoType } from '@/constants/types';
import FormatUtil from '@/utils/format';
import * as style from './ProjectItem.style';

export interface ProjectItemProps {
  category: CategoryType;
  thumbnail: string;
  info: ProjectPartInfoType;
}

// TODO 멤버 모집률을 반영한 GrassIcon 상태 변화는 추후에 수정하겠습니다
const ProjectItem = ({ category, thumbnail, info }: ProjectItemProps) => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const onHover = () => setIsHovering((prev) => !prev);

  const { id, facilityAddress, projectStartDate, projectEndDate } = info;

  return (
    <style.Wrapper
      onMouseOver={onHover}
      onMouseOut={onHover}
      onClick={() => router.push(`/project/${id}`)}
    >
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
        <LocationIconSvg color={COLORS.primary.default} />
        <Text fontStyleName="body2R" color={COLORS.primary.default}>
          {FormatUtil.formatLocation(facilityAddress)}
        </Text>
      </style.InfoWrap>
      <style.InfoWrap>
        <CalendarIconSvg color={COLORS.grayscale.gray500} />
        <Text fontStyleName="body2R" color={COLORS.grayscale.gray500}>
          {FormatUtil.formatDuration(projectStartDate, projectEndDate)}
        </Text>
      </style.InfoWrap>
    </style.Wrapper>
  );
};

export default ProjectItem;
