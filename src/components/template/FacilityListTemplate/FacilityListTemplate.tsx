import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import ProjectList from '@/components/domain/Project/ProjectList';
import SideNavigationBar from '@/components/domain/MyPage/SideNavigationBar';

import { COLORS } from '@/constants/styles';

import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

import { projectsDummydata } from 'src/dummyData';
import * as style from './FacilityListTemplate.style';

const FacilityListTemplate = () => {
  const router = useRouter();
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'pc']);
  // FIXME : 추후 API 연동 시 isEmpty flag 제거 필요
  const isEmpty = true;

  const moveToApplyFacility = () => router.push('/mypage/operation/apply');

  return (
    <style.Wrapper>
      {currentBreakpoint === 'pc' && <SideNavigationBar />}
      <style.Aside>
        <style.HeaderWrap>
          <Text fontStyleName="title" color={COLORS.grayscale.gray600}>
            시설 관리
          </Text>
          <Button isRound className="seek-button" onClick={moveToApplyFacility}>
            + 시설 신청
          </Button>
        </style.HeaderWrap>
        {isEmpty ? (
          <style.EmptyNotice>
            <Text
              fontStyleName="subtitle2R"
              color={COLORS.grayscale.gray500}
              className="inner-text"
            >
              아직 등록하신 시설이 없습니다!
            </Text>
          </style.EmptyNotice>
        ) : (
          <ProjectList data={projectsDummydata} />
        )}
      </style.Aside>
    </style.Wrapper>
  );
};

export default FacilityListTemplate;
