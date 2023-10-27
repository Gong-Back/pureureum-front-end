import Button from '@/components/common/Button';
import ModalTemplate from '@/components/common/ModalTemplate';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import useModal from '@/hooks/useModal';

import * as style from './ProjectFilterModal.style';

const ProjectFilterModal = () => {
  const { closeModal } = useModal();

  return (
    <ModalTemplate title="휴대폰 번호 변경하기">
      <style.Wrapper>
        <Text
          color={COLORS.grayscale.gray500}
          fontStyleName="body3"
          className="title"
        >
          카테고리
        </Text>
      </style.Wrapper>
    </ModalTemplate>
  );
};

export default ProjectFilterModal;
