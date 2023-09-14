import { projectsDummydata } from 'src/dummyData';
import Text from '@/components/common/Text';
import Layout from '@/components/domain/MyPage/Layout';
import ProjectList from '@/components/domain/Project/ProjectList';
import { COLORS } from '@/constants/styles';
import * as style from './FacilityListTemplate.style';

const FacilityListTemplate = () => {
  // FIXME : 추후 API 연동 시 isEmpty flag 제거 필요
  const isEmpty = true;

  return (
    <Layout title="시설 관리">
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
    </Layout>
  );
};

export default FacilityListTemplate;
