import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';

import { COLORS } from '@/constants/styles';
import * as style from './FacilityInfoForm.style';

const FacilityInfoForm = () => (
  <style.Wrapper>
    <style.FacilityNameForm>
      <style.FormTitle>
        <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray600}>
          시설 이름
        </Text>
        <Text
          fontStyleName="body1B"
          color={COLORS.caption}
          className="asterisk"
        >
          *
        </Text>
      </style.FormTitle>
      <TextInput
        value=""
        placeholder="시설 이름을 지정해주세요"
        sizeType="large"
        className="name-input"
        isFilled
      />
    </style.FacilityNameForm>
    <style.FacilityLocForm>
      <style.FormTitle className="title">
        <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray600}>
          시설 위치
        </Text>
        <Text
          fontStyleName="body1B"
          color={COLORS.caption}
          className="asterisk"
        >
          *
        </Text>
      </style.FormTitle>
      <TextInput
        value=""
        placeholder="주소를 지도에서 검색해주세요"
        sizeType="large"
        className="loc-input"
        isFilled
      />
      <Button isFilled className="search-button">
        지도 검색
      </Button>
      <TextInput
        value=""
        placeholder="상세 주소"
        sizeType="large"
        className="detail-input"
        isFilled
      />
    </style.FacilityLocForm>
    <style.FacilityDocsForm>
      <style.FormTitle className="title">
        <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray600}>
          시설 위치
        </Text>
        <Text
          fontStyleName="body1B"
          color={COLORS.caption}
          className="asterisk"
        >
          *
        </Text>
      </style.FormTitle>
      <TextInput
        value=""
        placeholder="시설 인증을 할 수 있는 서류를 첨부해주세요"
        sizeType="large"
        className="file-input"
        isFilled
      />
      <Button isFilled className="find-button">
        파일 찾기
      </Button>
    </style.FacilityDocsForm>
  </style.Wrapper>
);

export default FacilityInfoForm;
