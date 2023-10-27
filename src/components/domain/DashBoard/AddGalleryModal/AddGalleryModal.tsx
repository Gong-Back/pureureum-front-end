import { ChangeEvent, useState } from 'react';

import Button from '@/components/common/Button';
import ModalTemplate from '@/components/common/ModalTemplate';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import useModal from '@/hooks/useModal';

import * as style from './AddGalleryModal.style';

const AddGalleryModal = () => {
  const { closeModal } = useModal();
  const [imageUrl, setImageUrl] = useState('');

  const handleImageFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
    // TODO get image url from server
  };

  const addGallery = async () => {
    // TODO post new gallery to server
    closeModal();
  };

  return (
    <ModalTemplate title="갤러리 추가하기">
      <style.Wrapper>
        <Text
          color={COLORS.grayscale.gray500}
          fontStyleName="body2R"
          className="intro"
        >
          모임 관련한 추억을 사람들과 공유해주세요!
        </Text>
        <style.ImageInputWrapper>
          <input type="file" onChange={handleImageFileInput} />
        </style.ImageInputWrapper>
        <Button
          isFilled
          themeColor={COLORS.primary.default}
          sizeType="small"
          className="add-gallery-btn"
          onClick={addGallery}
        >
          추가하기
        </Button>
      </style.Wrapper>
    </ModalTemplate>
  );
};

export default AddGalleryModal;
