import styled from '@emotion/styled';

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
