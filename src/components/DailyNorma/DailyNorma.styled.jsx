import styled from 'styled-components';

export const DailyNormaWrapper = styled.div`
  display: inline-flex;
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid var(--secondary-color-2);
  background: var(--primery-color-white);
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);

  @media screen and (min-width: 768px) {
    position: absolute;
  }
  @media screen and (min-width: 1440px) {
    top: 30px;
    left: 73px;
  }
`;

export const DailyNormaTitle = styled.h3`
  color: var(--primery-color-black);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(1.33333);
  margin-bottom: 12px;
`;

export const DailyNormaValue = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  color: #407bff;
`;

export const DailyNormaContent = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const EditButton = styled.button`
  position: relative;
  font-size: 16px;
  line-height: calc(1.25);
  background-color: transparent;
  color: var(--secondary-color-4);
  border: none;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primery-color-blue);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primery-color-blue);

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;
