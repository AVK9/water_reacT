import React, { useState, useEffect } from 'react';
import {
  SignInGlobalContainer,
  SignInContainer,
  SignInTitle,
  SignInLabel,
  SignInInput,
  SignInButton,
  SignInwater,
  TogglePasswordButton,
  ErrorMessage,
} from './SignInPage.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // Валідація кнопки
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const handleSignIn = () => {
    // Валідація електронної пошти
    if (!email || !email.includes('@')) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // Валідація пароля
    if (!password || password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    
  };

  return (
    <SignInGlobalContainer>
      <SignInwater></SignInwater>
      <SignInContainer>
        <SignInTitle>Sign In</SignInTitle>
        <SignInLabel>Enter your email</SignInLabel>
        <SignInInput
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={emailError ? { borderColor: 'red'} : null}
         
        />
        {emailError && <ErrorMessage>Email is invalid</ErrorMessage>}
        <SignInLabel>Enter your password</SignInLabel>
        <div style={{ position: 'relative' }}>
          <SignInInput
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={passwordError ? { borderColor: 'red' } : null}
          />
          <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </TogglePasswordButton>
        </div>
        {passwordError && <ErrorMessage>Password is invalid</ErrorMessage>}
        <SignInButton disabled={!formValid} onClick={handleSignIn} >
          Sign In
        </SignInButton>
        <Link to="/signup" style={{ color: 'blue', textDecoration: 'none' }}>Sign Up</Link>
      </SignInContainer>
    </SignInGlobalContainer>
  );
};

export default SignInComponent;
