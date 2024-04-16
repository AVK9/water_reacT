import styled from 'styled-components';

export const StyledSwitcherContainer = styled.div`
  position: fixed;
  top: 28px;
  right: 20px;

  @media (max-width: 815px) {
    left: 64%;
    transform: translateX(-50%);
    top: 10px;
    z-index: 100;
  }
`;

export const StyledSelect = styled.div`
  cursor: pointer;
  border: 1px solid rgba(64, 123, 255, 0.2);
  color: var(--primery-color-blue);
  border-radius: 11px;
  width: 24px;
  height: 24px;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(64, 123, 255, 0.3);
  }
`;

export const StyledOption = styled.li`
  list-style: none;
  cursor: pointer;
  border-radius: 11px;

  &:hover {
  }
`;

export const StyledOptionList = styled.ul`
  border-radius: 11px;
  padding: 0;
  margin: 0;
`;

export const StyledOptionEn = styled(StyledOption)`
  width: 24px;
  height: 24px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledOptionUa = styled(StyledOption)`
  width: 24px;
  height: 24px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;
