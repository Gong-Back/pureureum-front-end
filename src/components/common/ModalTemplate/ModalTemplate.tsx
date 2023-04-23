import React from 'react';

import useModal from '@/hooks/useModal';
import ModalCloseIconSvg from '@/assets/icons/modalCloseIcon.svg';

import * as styles from './ModalTemplate.style';

interface ModalTemplateProps {
  title: string;
  children: React.ReactNode;
}

const ModalTemplate = ({ title, children }: ModalTemplateProps) => {
  const { closeModal } = useModal();

  return (
    <styles.Wrapper>
      <styles.Header>
        <styles.Title>{title}</styles.Title>
        <ModalCloseIconSvg onClick={closeModal} />
      </styles.Header>
      <styles.Section>{children}</styles.Section>
    </styles.Wrapper>
  );
};

export default ModalTemplate;
