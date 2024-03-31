import styled from 'styled-components';

export const SignUpGlobalContainer = styled.section`
    padding-top: 40px;
    background-position: center center;
    
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    
`

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    align-items: flex-start;

 
 `; 

 
 


export const SignUpTitle = styled.h2`
  margin-bottom: 20px;
`;

export const SignUpLabel = styled.label`
  display: flex;
  gap: 16px;
  margin-bottom: 5px;
  
`;

export const SignUpInput = styled.input`
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  background: #fff;
`;

export const SignUpButton = styled.button`
  width: 280px;
  height: 36px;
  padding: 10px;
  
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: #407bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;





export const TogglePasswordButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color:var(--primery-color-blue);
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;