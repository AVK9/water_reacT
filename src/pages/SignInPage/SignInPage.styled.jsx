import styled from '@emotion/styled';
import bacStail from '../../assets/img/Frame-mobail.png';
import mobilWater from '../../assets/img/mobile-woter.png';
import tabWater from '../../assets/img/BottleforSignin.png';
import desktopWater from '../../assets/img/desktopWaterIn.png';




export const SignInGlobalContainer = styled.section`
  padding-top: 24px;
  display: flex;
  flex-direction: column-reverse;
  padding: 32px;

  @media screen and (min-width: 1440px) {
     background-image: url(${desktopWater});
     background-repeat: no-repeat;
     background-position: -50px;
     display: flex;
     flex-direction: row;
    };
 
`;
  
 


export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: flex-start;
  background-image: url(${bacStail});
   


  @media screen and (min-width: 768px) {
    position: relative;
    background-image: url(${tabWater});
    width: 786px;
    height: 658px;
    background-position: -35px;
    };
    
    @media screen and (min-width: 1440px) {
      background-image: none;
      position: static;
      min-width: 384px;
      min-height: 312px
      
     
    }
 
 

`;




export const SignInwater = styled.div`
    background-image: url(${mobilWater});
    background-size: contain;
    background-repeat: no-repeat;
    width: 280px;
    height: 210px;
    background-position: center center;





     @media screen and (min-width: 768px) {
    background-image: none;
    
   
  }

`;



export const SignInTitle = styled.h2`
 font-weight: 500;
 font-size: 26px;
 line-height: 1.23077;
 color: var(--primery-color-black);
 margin-bottom: 20px;
`;

export const SignInLabel = styled.label`
  display: flex;
  gap: 16px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--primery-color-black);
`;

export const SignInInput = styled.input`
  border: 1px solid ${props => (props.error ? 'red' : '#d7e3ff')};
  border-radius: 6px;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  background: var(--primery-color-white);
  outline: none;
  

  @media screen and (min-width: 768px) {
    border: 1px solid ${props => (props.error ? 'red' : '#d7e3ff')};
    border-radius: 6px;
    padding: 12px 10px;
    width: 336px;
    height: 44px;
    
  }


`;

export const SignInButton = styled.button`
  width: 280px;
  height: 36px;
  padding: 10px;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background:var(--primery-color-blue);
  color: var(--primery-color-white);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media screen and (min-width: 768px) {
    border-radius: 10px;
    padding: 10px 30px;
    width: 336px;
    height: 44px;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: #407bff;
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
   color: #76d7f0;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
 
`;


