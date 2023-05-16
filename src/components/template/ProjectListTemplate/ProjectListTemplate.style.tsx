import { MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1110px;
  padding: 100px 0px;
  position: relative;
  margin: 0 auto;

  > .sort-method-dropdown-menu {
    position: absolute;
    top: 145px;
    right: 0px;
  }

  @media screen and (min-width: 1000px) and (max-width: 1229px) {
    width: 730px;
  }

  @media ${MEDIA_QUERIES.mobile} {
    width: 630px;
  }

  @media screen and (max-width: 689px) {
    width: 300px;
  }
`;

export const ProjectListWrap = styled.div`
  width: 100%;
  display: grid;
  gap: 60px 30px;
  grid-template-columns: repeat(3, fit-content(100%));

  @media screen and (max-width: 1229px) {
    grid-template-columns: repeat(2, fit-content(100%));
  }

  @media screen and (max-width: 689px) {
    grid-template-columns: repeat(1, fit-content(100%));
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 45px;

  @media screen and (max-width: 689px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

export const TitleWrap = styled.div`
  > .sub-title {
    margin-top: 10px;
  }
`;
