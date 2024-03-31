import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 60px;
    padding-top: 40px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: end;
    gap: 80px;
    padding: 80px 0;
  }
`;
