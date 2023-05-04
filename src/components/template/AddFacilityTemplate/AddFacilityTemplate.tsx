import FacilityInfoForm from '@/components/domain/MyPage/FacilityInfoForm';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

import ChevronLeftIconSvg from '@/assets/icons/ChevronLeftIcon.svg';

import { COLORS } from '@/constants/styles';
import * as style from './AddFacilityTemplate.style';

const AddFacilityTemplate = () => (
  <style.Wrapper>
    <style.Header>
      <ChevronLeftIconSvg />
      <Text color={COLORS.grayscale.gray700} fontStyleName="title">
        신규 시설 등록
      </Text>
    </style.Header>
    <style.Main>
      <FacilityInfoForm
        category="FARMING_HEALING"
        name="테스트 시설"
        city="화성시"
        county="반송동"
        district=""
        detail="테스트 아파트"
      />
      <style.ButtonBox>
        <Button isRound isFilled sizeType="large" className="bottom-btn">
          신청 완료
        </Button>
        <Button
          isRound
          themeColor={COLORS.grayscale.gray400}
          sizeType="large"
          className="bottom-btn"
        >
          취소
        </Button>
      </style.ButtonBox>
    </style.Main>
  </style.Wrapper>
);

export default AddFacilityTemplate;
