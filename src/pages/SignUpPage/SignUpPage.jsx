import React, { useState } from 'react';
import { SignUpGlobalContainer, SignUpContainer, SignUpTitle, SignUpLabel, SignUpInput, SignUpButton, TogglePasswordButton, ErrorMessage } from './SignUpPage.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

   const handleSignUp = () => {
    // Валідація електронної пошти
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    // Валідація пароля
    if (!password || password.length < 6) {
      setError('Please enter a password with at least 6 characters.');
      return;
    }
    // Перевірка, чи паролі співпадають
    if (password !== repeatPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Логіка реєстрації користувача...
  };
  return (
    <SignUpGlobalContainer>
      <SignUpContainer>
        <SignUpTitle>Sign Up</SignUpTitle>
        <SignUpLabel>Enter your email</SignUpLabel>
        <SignUpInput 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <SignUpLabel>Enter your password</SignUpLabel>
        <div style={{ position: 'relative' }}>
          <SignUpInput
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TogglePasswordButton
            type="button"
            onClick={togglePasswordVisibility}
             disabled={!password}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </TogglePasswordButton>
        </div>
        <SignUpLabel>Repeat password</SignUpLabel>
        <div style={{ position: 'relative' }}>
          <SignUpInput
            type={repeatPasswordVisible ? 'text' : 'password'}
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <TogglePasswordButton
            type="button"
            onClick={toggleRepeatPasswordVisibility}
           disabled={!repeatPassword}
          >
            <FontAwesomeIcon icon={repeatPasswordVisible ? faEyeSlash : faEye} />
          </TogglePasswordButton>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
        <Link to="/signin">Sign In</Link>
      </SignUpContainer>
    </SignUpGlobalContainer>
  );
};

export default SignUpComponent;
