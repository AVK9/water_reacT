import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Upload = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #407bff;

  & p {
    transition: color 0.25s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }

  &:hover,
  &:focus {
    & svg {
      fill: #ef5050;
    }
    & p {
      color: #ef5050;
    }
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: #407bff;
    transition: fill 0.25s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d7e3ff;
  background-size: cover;
  background-repeat: no-repeat;
`;
