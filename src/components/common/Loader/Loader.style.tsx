import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import CharacterSvg from '@/assets/icons/character.svg'

const LoaderMovement = keyframes`
    from {
        transform: translate3d(0px, 0px, 0px);
    }

    20% {
        transform: translate3d(0px, 25px, 0px);
    }

    40% {
        transform: translate3d(0px, 0px, 0px);
    }

    80% {
        transform: translate3d(0px, 40px, 0px);
    }

    to {
        transform: translate3d(0px, 0px, 0px);
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px 0;

    width: 100%;
    height: 100%;
`

export const Loader = styled(CharacterSvg)`
    margin-bottom: 36px;
    animation: ${LoaderMovement} 800ms cubic-bezier(0.665, 1.290, 1.000, 0.985) infinite;
    animation-delay: 250ms;
`