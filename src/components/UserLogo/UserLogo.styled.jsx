import { styled } from 'styled-components';

export const ContainerButton = styled.div`
  position: relative;
`;

export const ButtonUserLogo = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
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
  background-color: var(--primery-color-blue);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const Initials = styled.span`
  color: var(--secondary-color---5);
  font-size: 16px;
  font-weight: bold;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '16px'};
  height: ${(props) => props.size || '16px'};
  fill: var(--primery-color-blue);
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0')});
`;
