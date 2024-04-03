import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TextLink = styled.p`
  color: var(--primery-color-blue);
  font-size: 16px;
  transition: color 250ms linear;

  &:hover {
    color: var(--secondary-color-5);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '28px'};
  height: ${(props) => props.size || '28px'};
  stroke: ${(props) => props.color || 'var(--primery-color-black)'};
  fill: transparent;
`;
