import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { ProjectRepository } from '@/apis/project';
import Button from '@/components/common/Button';
import CategoryTag from '@/components/common/CategoryTag';
import Text from '@/components/common/Text';
import FloatingMenu from '@/components/domain/Project/FloatingMenu';
import QUERY_KEY from '@/constants/apis/queryKey';
import { COLORS } from '@/constants/styles';
import { ProjectContentType } from '@/constants/types';
import useKakaoMap from '@/hooks/useKakaoMap';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import { useGetProjectDetail } from '@/query-hooks/project';

import * as style from './ProjectDetailTemplate.style';

export const CONTENT_MENU: { type: ProjectContentType; label: string }[] = [
  { type: 'INTRO', label: '프로젝트 소개' },
  { type: 'COST', label: '유의사항 및 금액' },
  { type: 'LOCATION', label: '찾아오시는 길' },
  { type: 'QNA', label: '문의하기' },
];

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext,
) => {
  const queryClient = new QueryClient();

  const pid = ctx.params?.pid as string;
  const projectId = Number(pid);

  try {
    await queryClient.prefetchQuery({
      queryFn: () => ProjectRepository.getProjectDetailDataAsync(projectId),
      queryKey: QUERY_KEY.PROJECT.detail(projectId),
      staleTime: 1000 * 60 * 5,
    });
  } catch {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: true,
      },
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const ProjectDetailTemplate = () => {
  const router = useRouter();
  const projectId = Number(router.query.pid);

  const { data: projectDetailData } = useGetProjectDetail(projectId);
  const { projectInformation, projectCategory, projectFiles, projectPayment } =
    projectDetailData;
  const {
    title,
    content,
    recruits,
    totalRecruits,
    notice,
    guide,
    facilityAddress: { latitude, longitude },
  } = projectInformation;

  const [activeMenu, setActiveMenu] = useState<ProjectContentType>('INTRO');
  const mapRef = useKakaoMap(Number(latitude), Number(longitude));

  const currentBreakpoint = useMeasureBreakpoint();
  const isPC = currentBreakpoint === 'pc';

  const thumbnailImageUrl =
    projectFiles.length > 0
      ? projectFiles.filter((p) => p.projectFileType === 'THUMBNAIL')[0]
          .projectFileUrl
      : '/projectThumbnail.jpg';

  const renderDetailContent = () => {
    switch (activeMenu) {
      case 'INTRO': {
        return (
          <Text
            fontStyleName="body1R"
            color={COLORS.grayscale.gray700}
            className="content"
          >
            {content}
          </Text>
        );
      }
      case 'COST': {
        return (
          <>
            <Text fontStyleName="subtitle2B" color={COLORS.grayscale.dark}>
              유의사항
            </Text>
            <Text
              fontStyleName="body1R"
              color={COLORS.grayscale.gray700}
              className="content cost-content"
            >
              {notice ?? '유의사항 없음'}
            </Text>
            <Text fontStyleName="subtitle2B" color={COLORS.grayscale.dark}>
              참가비
            </Text>
            <Text
              fontStyleName="body1R"
              color={COLORS.grayscale.gray700}
              className="content cost-content"
            >
              {projectPayment ?? '참가비 없음'}
            </Text>
          </>
        );
      }
      case 'LOCATION': {
        return (
          <Text
            fontStyleName="body1R"
            color={COLORS.grayscale.gray700}
            className="content"
          >
            {guide}
          </Text>
        );
      }
      case 'QNA': {
        return <>문의하기 기능은 준비중이에요!</>;
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
          alt='thumbnail'
        />
        {!isPC && (
          <FloatingMenu
            projectInfo={projectInformation}
            className="mobile-floating-menu"
          />
        )}
        <style.MenuWrapper>
          {CONTENT_MENU.map(({ type, label }) => (
            <style.Menu key={type} onClick={() => setActiveMenu(type)}>
              <Text
                fontStyleName={type === activeMenu ? 'body1B' : 'body1R'}
                color={
                  COLORS.grayscale[type === activeMenu ? 'gray700' : 'gray500']
                }
              >
                {label}
              </Text>
            </style.Menu>
          ))}
        </style.MenuWrapper>
        {renderDetailContent()}
        <style.MapContainer ref={mapRef} visible={activeMenu === 'LOCATION'} />
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
          themeColor={COLORS.primary.default}
          isFilled
          onClick={() => router.push(`/project/apply/${projectId}`)}
        >
          프로젝트 참여하기
        </Button>
      </style.FloatingWrapper>
    </style.Wrapper>
  );
};

export default ProjectDetailTemplate;
