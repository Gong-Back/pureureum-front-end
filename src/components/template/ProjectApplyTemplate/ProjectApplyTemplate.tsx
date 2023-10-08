import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { ProjectRepository } from '@/apis/project';
import { UserRepository } from '@/apis/user';
import LeftIconSvg from '@/assets/icons/leftIcon.svg';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import FloatingMenu from '@/components/domain/Project/FloatingMenu';
import QUERY_KEY from '@/constants/apis/queryKey';
import { COLORS } from '@/constants/styles';
import { useGetProjectDetail } from '@/query-hooks/project';
import { useGetUserProfile } from '@/query-hooks/user';

import * as styles from './ProjectApplyTemplate.style';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const isLogin = ctx.req?.headers.cookie?.includes('accessToken') || false;

  if (!isLogin)
    return {
      redirect: {
        destination: '/auth/login',
        permanent: true,
      },
    };

  const queryClient = new QueryClient();
  const projectId = Number(ctx.params?.pid);

  await Promise.all([
    queryClient.prefetchQuery({
      queryFn: () => UserRepository.getUserInfoAsync(),
      queryKey: QUERY_KEY.USER.base,
      staleTime: Infinity,
      cacheTime: Infinity,
    }),
    queryClient.prefetchQuery({
      queryFn: () => ProjectRepository.getProjectDetailDataAsync(projectId),
      queryKey: QUERY_KEY.PROJECT.detail(projectId),
      staleTime: 1000 * 60 * 5,
    }),
  ]);

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};

// TODO: 특정 컴포넌트에만 쓰이는 타입의 경우 어떻게 관리할 것인지 논의 필요.
type ProjectApplyConfirmedType = {
  isPaid: boolean;
  isConfirmed: boolean;
};

const ProjectApplyTemplate = () => {
  const router = useRouter();
  const projectId = Number(router.query.pid);

  const { data: userProfileData } = useGetUserProfile();
  const { data: projectDetailData } = useGetProjectDetail(projectId);

  const { name, nickname, birthday, gender, phoneNumber } = userProfileData;
  const { projectInformation, projectPayment } = projectDetailData;

  const [checkedOption, setCheckedOption] = useState<ProjectApplyConfirmedType>(
    {
      isPaid: !!projectPayment,
      isConfirmed: false,
    },
  );

  const isCheckedAll = Object.keys(checkedOption).every(Boolean);

  const handleCheckboxOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: checkBoxName } = e.target;
    setCheckedOption({
      ...checkedOption,
      [checkBoxName]:
        !checkedOption[checkBoxName as keyof ProjectApplyConfirmedType],
    });
  };

  const submitProjectApply = async () => {
    if (!isCheckedAll) return;
    try {
      await ProjectRepository.postProjectApplyAsync(projectId);
      router.replace('/mypage/project/pending');
    } catch (error) {
      // TODO: 에러 발생 시 toast 혹은 다른 요소로 에러가 발생했음을 사용자에게 인지하도록 해야 함.
      console.error(error);
    }
  }

  const age = new Date().getFullYear() - new Date(birthday).getFullYear() + 1;

  return (
    <styles.Wrapper>
      <styles.MainSection>
        <styles.Header>
          <LeftIconSvg
            width={35}
            height={35}
            fill={COLORS.grayscale.gray700}
            onClick={() => router.back()}
          />
          <Text fontStyleName="title" color={COLORS.grayscale.gray700}>
            프로젝트 신청
          </Text>
        </styles.Header>
        <styles.InfoSection>
          <Text fontStyleName="subtitle1" color={COLORS.grayscale.gray600}>
            참가자 정보
          </Text>
          <styles.InfoDetail>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              이름
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {name}
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              닉네임
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {nickname}
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              나이
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {age}
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              성별
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {gender}
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              전화번호
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {phoneNumber}
            </Text>
          </styles.InfoDetail>
        </styles.InfoSection>
        {projectPayment && (
          <styles.BankingSection>
            <Text fontStyleName="subtitle1" color={COLORS.grayscale.gray600}>
              참가비용 입금
            </Text>
            <Text fontStyleName="body2R" color={COLORS.grayscale.gray500}>
              푸르름은 아직 결제 서비스를 지원하지 않습니다. 하단에 기재되어
              있는 계좌로 참가비를 송금해주세요.
            </Text>
            <styles.BankingDetail>
              <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
                계좌
              </Text>
              <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
                {projectPayment || '없음'}
              </Text>
              <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
                은행
              </Text>
              <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
                국민은행
              </Text>
              <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
                예금주
              </Text>
              <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
                공소나
              </Text>
              <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
                금액
              </Text>
              <Text fontStyleName="body1R" color={COLORS.primary.dark}>
                KRW 10,000
              </Text>
              <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
                문의
              </Text>
              <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
                010-1234-1234
              </Text>
            </styles.BankingDetail>
          </styles.BankingSection>
        )}
        <styles.CheckBoxSection>
          <input
            type="checkbox"
            name="isPaid"
            onChange={handleCheckboxOption}
          />
          <Text fontStyleName="body1R" color={COLORS.grayscale.gray500}>
            참가비용을 입금했나요?
          </Text>
          <input
            type="checkbox"
            name="isConfirmed"
            onChange={handleCheckboxOption}
          />
          <Text fontStyleName="body1R" color={COLORS.grayscale.gray500}>
            프로젝트 유의사항을 제대로 확인했나요?
          </Text>
        </styles.CheckBoxSection>
        <FloatingMenu className="aside" projectInfo={projectInformation} />
      </styles.MainSection>
      <styles.ButtonSection>
        <Button
          onClick={submitProjectApply}
          themeColor={isCheckedAll ? COLORS.primary.default : COLORS.grayscale.gray200}
          sizeType="medium"
          className="button"
          isFilled
          isRound
        >
          <Text fontStyleName="body2B" color={COLORS.grayscale.white}>
            신청 완료
          </Text>
        </Button>
        <Button
          themeColor={COLORS.grayscale.gray200}
          sizeType="medium"
          className="button"
          isRound
        >
          <Text fontStyleName="body2B" color={COLORS.grayscale.gray200}>
            이전으로
          </Text>
        </Button>
      </styles.ButtonSection>
    </styles.Wrapper>
  );
};

export default ProjectApplyTemplate;
