import React, { useState } from 'react';
import { SignInGlobalContainer, SignInContainer, SignInTitle, SignInLabel, SignInInput, SignInButton, TogglePasswordButton } from './SignInPage.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignInComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  

  return (
    <SignInGlobalContainer>
    <SignInContainer>
      <SignInTitle>Sign In</SignInTitle>
      <SignInLabel>Enter your email</SignInLabel>
      <SignInInput type="email" placeholder="E-mail" />
      <SignInLabel>Enter your password</SignInLabel>
      <div style={{ position: 'relative' }}>
        <SignInInput
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Password"
        />
         <TogglePasswordButton
          type="button"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
        </TogglePasswordButton>
      </div>
      <SignInButton>Sign In</SignInButton>
      <Link to="/signup">Sign Up</Link>
      </SignInContainer>
    </SignInGlobalContainer>
  );
};

export default SignInComponent;
