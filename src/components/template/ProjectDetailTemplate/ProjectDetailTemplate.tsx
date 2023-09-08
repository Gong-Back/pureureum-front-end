import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/common/Button';
import CategoryTag from '@/components/common/CategoryTag';
import LocationBox from '@/components/common/LocationBox';
import Text from '@/components/common/Text';
import FloatingMenu from '@/components/domain/Project/FloatingMenu';
import { COLORS } from '@/constants/styles';
import { ProjectResponses } from '@/constants/types';
import useKakaoMap from '@/hooks/useKakaoMap';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import * as style from './ProjectDetailTemplate.style';

const DETAIL_MENU = ['intro', 'cost', 'location', 'qna'] as const;
const DETAIL_MENU_NAME = [
  '프로젝트 소개',
  '유의사항 및 금액',
  '찾아오시는 길',
  '문의하기',
];

type DetailMenuType = typeof DETAIL_MENU[number];

interface ProjectDetailTemplateProps {
  data: ProjectResponses['detail'];
}

const ProjectDetailTemplate = ({ data }: ProjectDetailTemplateProps) => {
  const { projectInformation, projectCategory, projectFiles, projectPayment } =
    data;
  const {
    title,
    content,
    recruits,
    totalRecruits,
    notice,
    guide,
    facilityAddress: { latitude, longitude },
  } = projectInformation;

  const [activeMenu, setActiveMenu] = useState<DetailMenuType>('intro');
  const mapRef = useKakaoMap(Number(latitude), Number(longitude));

  const currentBreakpoint = useMeasureBreakpoint();
  const isPC = currentBreakpoint === 'pc';

  const thumbnailImageUrl =
    projectFiles.length > 0
      ? projectFiles.filter((p) => p.projectFileType === 'THUMBNAIL')[0]
          .projectFileUrl
      : '/';

  const renderDetailContent = () => {
    switch (activeMenu) {
      case 'intro': {
        return (
          <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
            {content}
          </Text>
        );
      }
      case 'cost': {
        return (
          <>
            <Text fontStyleName="subtitle2B" color={COLORS.grayscale.dark}>
              유의사항
            </Text>
            <Text
              fontStyleName="body1R"
              color={COLORS.grayscale.gray700}
              className="cost-content"
            >
              {notice ?? '유의사항 없음'}
            </Text>
            <Text fontStyleName="subtitle2B" color={COLORS.grayscale.dark}>
              참가비
            </Text>
            <Text
              fontStyleName="body1R"
              color={COLORS.grayscale.gray700}
              className="cost-content"
            >
              {projectPayment ?? '참가비 없음'}
            </Text>
          </>
        );
      }
      case 'location': {
        return (
          <>
            <style.MapContainer ref={mapRef} />
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {guide}
            </Text>
          </>
        );
      }
      case 'qna': {
        return <>qna</>;
      }
      default: {
        return <>NOT FOUND</>;
      }
    }
  };
  return (
    <style.Wrapper>
      <style.ContentWrapper>
        <CategoryTag sizeType="small" type={projectCategory} />
        <style.ProjectTitle>{title}</style.ProjectTitle>
        <Image
          src={thumbnailImageUrl}
          width={800}
          height={450}
          className="thumbnail-img"
        />
        {!isPC && (
          <FloatingMenu
            projectInfo={projectInformation}
            className="mobile-floating-menu"
          />
        )}
        <style.MenuWrapper>
          {DETAIL_MENU.map((menu, idx) => (
            <style.Menu key={menu} onClick={() => setActiveMenu(menu)}>
              <Text
                fontStyleName={menu === activeMenu ? 'body1B' : 'body1R'}
                color={
                  COLORS.grayscale[menu === activeMenu ? 'gray700' : 'gray500']
                }
              >
                {DETAIL_MENU_NAME[idx]}
              </Text>
            </style.Menu>
          ))}
        </style.MenuWrapper>
        {renderDetailContent()}
      </style.ContentWrapper>
      <style.FloatingWrapper className={`${currentBreakpoint}-menu`}>
        {isPC && (
          <FloatingMenu
            projectInfo={projectInformation}
            className="floating-menu"
          />
        )}
        <Text
          fontStyleName="body2R"
          color={COLORS.grayscale.gray500}
          className={isPC ? 'recruit-info' : ''}
        >
          모집 인원 <span>{totalRecruits}</span>명 중에 <span>{recruits}</span>
          명이 신청했어요!
        </Text>
        <Button
          sizeType="large"
          themeColor={COLORS.primary.greenDefault}
          isFilled
        >
          프로젝트 참여하기
        </Button>
      </style.FloatingWrapper>
    </style.Wrapper>
  );
};

export default ProjectDetailTemplate;
