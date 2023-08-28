import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { ProjectContentType, ProjectResponses } from '@/constants/types';

import * as style from './DetailContent.style';

export interface DetailContentProps {
  type: ProjectContentType;
  data: ProjectResponses['detail'];
}

const DetailContent = ({ type, data }: DetailContentProps) => {
  const {
    projectInformation: projectInfo,
    projectFiles,
    paymentType,
    projectPayment,
  } = data;

  const renderContent = () => {
    switch (type) {
      case 'intro': {
        return (
          <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
            {projectInfo.content}
          </Text>
        );
      }
      // case 'cost': {
      //  return (
      //    <>
      //      <Text fontStyleName="subtitle2B" color={COLORS.grayscale.dark}>
      //        유의사항
      //      </Text>
      //      <Text
      //        fontStyleName="body1R"
      //        color={COLORS.grayscale.gray700}
      //        className="cost-content"
      //      >
      //        {projectInfo.notice}
      //      </Text>
      //      <Text fontStyleName="subtitle2B" color={COLORS.grayscale.dark}>
      //        참가비
      //      </Text>
      //      <Text
      //        fontStyleName="body1R"
      //        color={COLORS.grayscale.gray700}
      //        className="cost-content"
      //      >
      //        {projectPayment === 'NONE' || !projectPayment
      //          ? '참가비 없음'
      //          : `${
      //              paymentType === 'DEPOSIT' ? '보증금' : '참가비'
      //            } : ${projectPayment}`}
      //      </Text>
      //    </>
      //  );
      // }
      // case 'location': {
      //  return (
      //    // <style.MapContainer
      //    //  ref={mapRef}
      //    //  style={{ width: 360, height: 187 }}
      //    /// >
      //    <>location</>
      //  );
      // }
      /// / 문의하기
      // case 'qna': {
      //  return <>qna</>;
      // }
      default:
        return <>NOT FOUND</>;
    }
  };
  return <style.Wrapper>{renderContent()}</style.Wrapper>;
};

export default DetailContent;
