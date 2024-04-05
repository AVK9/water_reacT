import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 320px;
  max-width: 375px;

  margin-left: auto;
  margin-right: auto;

  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  
  }
`;
