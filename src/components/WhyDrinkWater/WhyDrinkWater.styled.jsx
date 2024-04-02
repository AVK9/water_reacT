import { styled } from 'styled-components';

export const ContainerWDW = styled.div`
  padding: 24px 16px;
  margin: 0 20px;
  background-color: var(--secondary-color-2);
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 520px) {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
  }
`;

export const TitleWDW = styled.h3`
  color: var(--primery-color-black);
  font-size: 18px;
  margin-bottom: 12px;
`;

export const ListWDW = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemWDW = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Point = styled.div`
  min-width: 8px;
  min-height: 8px;
  background-color: var(--primery-color-blue);
  border-radius: 50%;
`;

export const TextWDW = styled.p`
  color: var(--primery-color-black);
  font-size: 16px;
`;
