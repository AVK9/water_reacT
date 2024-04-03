import { styled } from 'styled-components';

export const ButtonUserLogo = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
`;

export const UserName = styled.p`
  color: var(--primery-color-black);
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Avatar = styled.div`
  width: 28px;
  height: 28px;
  background-color: var(--secondary-color-2);
  border: 1px solid var(--primery-color-black);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Initials = styled.span`
  color: var(--primery-color-black);
  font-size: 16px;
  font-weight: bold;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '16px'};
  height: ${(props) => props.size || '16px'};
  fill: var(--primery-color-blue);
`;