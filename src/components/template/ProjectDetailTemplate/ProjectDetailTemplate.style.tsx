import { COLORS, MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  margin: 100px 0px;
  padding: 0px 30px;
  position: relative;

  .tablet-menu {
    position: fixed;
    top: auto;
    bottom: 0;
    flex-direction: row;
    justify-content: flex-end;
    gap: 18px;
    padding-right: 30px;

    width: 100%;
    height: 69px;
  }

  .mobile-menu {
    position: fixed;
    top: auto;
    bottom: 0;
    justify-content: center;
    align-items: center;
    gap: 5px;

    width: 100%;
    height: 90px;
  }
`;

export const ProjectTitle = styled.h1`
  margin: 15px 0px 30px;
  font-size: 35px;
  font-weight: 800;
  line-height: 48px;

  @media ${MEDIA_QUERIES.mobile} {
    font-size: 27px;
    line-height: 43px;
  }
`;

export const ThumbnailImg = styled.img`
  width: 800px;
  height: 450px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;

  .thumbnail-img {
    background-color: ${COLORS.grayscale.gray100};
  }

  .content {
    word-break: break-all;
    word-wrap: break-word;
  }

  .cost-content {
    margin: 15px 0px 75px;
  }

  .mobile-floating-menu {
    margin: 30px 0px -40px;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  margin: 70px 0px 36px;

  display: flex;
  gap: 30px;
  border-bottom: 1px solid ${COLORS.grayscale.gray200};
`;

export const Menu = styled.div`
  height: 40px;
  cursor: pointer;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 250px;

  display: ${(props: { visible: boolean }) =>
    props.visible ? 'flex' : 'none'};
`;

export const FloatingWrapper = styled.div`
  position: sticky;
  top: 100px;
  width: 380px;
  background-color: ${COLORS.grayscale.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  .recruit-info {
    margin: 25px 0px 5px;
  }

  span {
    color: ${COLORS.primary.default};
    font-weight: 600;
  }

  button {
    width: 300px;
  }
`;
