import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import CategoryTag from '@/components/common/CategoryTag';

import { CategoryType } from '@/constants/types';

import { COLORS } from '@/constants/styles';
import * as style from './FacilityInfoForm.style';

interface FacilityInfoFormProps {
  category: CategoryType;
  name: string;
  city: string;
  county: string;
  district: string;
  detail: string;
}

const FacilityInfoForm = ({
  category = 'ETC',
  name = '테스트 시설',
  city = '',
  county = '',
  district = '',
  detail = '',
}: FacilityInfoFormProps) => (
  <style.Wrapper>
    <style.ProjectTypeSelect>
      <style.FormTitle className="title">
        <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray600}>
          카테고리
        </Text>
        <Text
          fontStyleName="body1B"
          color={COLORS.caption}
          className="asterisk"
        >
          *
        </Text>
      </style.FormTitle>
      <CategoryTag
        type="YOUTH_FARMING"
        sizeType="big"
        className={`youth-farming ${
          category !== 'YOUTH_FARMING' ? 'not-selected' : ''
        }`}
      />
      <CategoryTag
        type="FARMING_EXPERIENCE"
        sizeType="big"
        className={`farming-experience ${
          category !== 'FARMING_EXPERIENCE' ? 'not-selected' : ''
        }`}
      />
      <CategoryTag
        type="FARMING_HEALING"
        sizeType="big"
        className={`farming-healing ${
          category !== 'FARMING_HEALING' ? 'not-selected' : ''
        }`}
      />
      <CategoryTag
        type="ETC"
        sizeType="big"
        className={`etc ${category !== 'ETC' ? 'not-selected' : ''}`}
      />
    </style.ProjectTypeSelect>
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
        onChange={() => {}}
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
        onChange={() => {}}
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
        onChange={() => {}}
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
        onChange={() => {}}
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
