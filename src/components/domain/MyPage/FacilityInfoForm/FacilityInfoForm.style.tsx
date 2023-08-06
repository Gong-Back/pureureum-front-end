import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px 0px;

  width: 1000px;
  margin: auto;

  @media ${MEDIA_QUERIES.mobile} {
    width: 400px;
  }

  @media ${MEDIA_QUERIES.tablet} {
    width: 670px;
  }
`;

export const FormTitle = styled.div`
  display: flex;
  gap: 0px 10px;

  > .asterisk {
    margin: auto 0px;
  }
`;

export const ProjectTypeSelect = styled.div`
  display: grid;
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: repeat(4, fit-content(100%));
  grid-template-areas:
    'title title title title'
    'youth-farming farming-experience farming-healing etc';

  gap: 20px 30px;

  > .title {
    grid-area: title;
  }

  > .not-selected {
    background-color: ${COLORS.grayscale.gray100};

    > .text {
      color: ${COLORS.grayscale.gray700};
    }
  }

  > .youth-farming {
    grid-area: youth-farming;
    cursor: pointer;
  }

  > .farming-experience {
    grid-area: farming-experience;
    cursor: pointer;
  }

  > .farming-healing {
    grid-area: farming-healing;
    cursor: pointer;
  }

  > .etc {
    grid-area: etc;
    cursor: pointer;
  }
`;

export const FacilityNameForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0px;

  > .name-input {
    width: 100%;
  }
`;

export const FacilityLocForm = styled.div`
  display: grid;
  grid-template-rows: fit-content(100%) repeat(2, 1fr);
  grid-template-columns: 1fr fit-content(100%);
  grid-template-areas:
    'title title'
    'loc-input search-button'
    'detail-input detail-input';
  gap: 20px 50px;

  > .title {
    grid-area: title;
  }

  > .loc-input {
    width: auto;
    grid-area: loc-input;
  }

  > .search-button {
    width: 135px;
    height: 45px;

    margin: auto 0px;
    grid-area: search-button;

    @media ${MEDIA_QUERIES.mobile} {
      width: 100px;
    }
  }

  > .detail-input {
    width: 100%;
    grid-area: detail-input;
  }
`;

export const FacilityDocsForm = styled.div`
  display: grid;
  grid-template-rows: fit-content(100%) 1fr;
  grid-template-columns: 1fr fit-content(100%);
  grid-template-areas:
    'title title'
    'file-input find-button';
  gap: 20px 50px;

  > .title {
    grid-area: title;
  }

  > .file-input {
    width: auto;
    grid-area: file-input;
  }

  > .find-button {
    width: 135px;
    height: 45px;

    margin: auto 0px;
    grid-area: find-button;

    @media ${MEDIA_QUERIES.mobile} {
      width: 100px;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0px 25px;

  margin: 0 auto 40px auto;

  > .bottom-btn {
    width: 255px;
  }

  @media ${MEDIA_QUERIES.mobile} {
    width: 180px;
  }
`;

export const Feedback = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px auto 80px auto',
    color: colors.caption,
    ...fonts.pc.body2R,
  };
});
