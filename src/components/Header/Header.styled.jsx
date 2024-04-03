import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding-top: 8px;

  @media screen and (min-width: 768px) {
    padding-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 12px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
