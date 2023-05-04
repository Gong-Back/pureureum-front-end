import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Header = styled.div`
  display: flex;
  align-items: center;
  /*margin-left: -50px;*/
  gap: 20px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 70px auto 0px;
  padding: 0 40px;
  max-width: 1100px;

  > .title-input {
    border: none;
    width: 100%;
    height: 90px;
    margin-top: 30px;
    padding: 0px;

    &::placeholder {
      color: ${COLORS.grayscale.gray300};
      font-size: 30px;
      font-weight: 800;
    }
  }
`;

export const BottomBar = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  > button {
    width: 255px;
  }
`;

export const Feedback = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px',
    color: colors.caption,
    ...fonts.pc.body2R,

    position: 'absolute',
    top: '-30px',
  };
});
