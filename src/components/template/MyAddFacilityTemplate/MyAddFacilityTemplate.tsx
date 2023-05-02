import FacilityInfoForm from '@/components/domain/MyPage/AddFacility/FacilityInfoForm';
import SelectProjectCategory from '@/components/domain/MyPage/AddFacility/SelectProjectCategory';

import * as style from './MyAddFacilityTemplate.style';

const MyAddFacilityTemplate = () => (
  <style.Wrapper>
    <SelectProjectCategory />
    <FacilityInfoForm />
  </style.Wrapper>
);

export default MyAddFacilityTemplate;
