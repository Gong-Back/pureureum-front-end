import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import CharacterSvg from '@/assets/icons/character.svg';

const LoaderMovement = keyframes`
    from {
        transform: translate3d(0px, 0px, 0px) rotate(0deg);
    }

    25% {
        transform: translate3d(0px, -20px, 0px) rotate(5deg);
    }

    45% {
        transform: translate3d(0px, 0px, 0px) rotate(0deg);
    }

    75% {
        transform: translate3d(0px, -35px, 0px) rotate(10deg);
    }

    to {
        transform: translate3d(0px, 0px, 0px) rotate(2.5deg);
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px 0;

  width: 100%;
  height: 100%;
`;

export const Loader = styled(CharacterSvg)`
  animation: ${LoaderMovement} 750ms cubic-bezier(0.665, 1.29, 1, 0.985)
    infinite;
  animation-delay: 250ms;
`;
