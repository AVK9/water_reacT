import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { Link, useNavigate } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/authThunk';
import { isAuthSelector } from '../../redux/auth/selectors';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
  };

  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth && navigate('/home');
  }, [isAuth, navigate]);

  return (
    <SignInGlobalContainer>
      <SignInwater></SignInwater>
      <SignInContainer>
        <form onSubmit={handleSubmit}>
          <SignInTitle>Sign In</SignInTitle>
          <SignInLabel>Enter your email</SignInLabel>
          <SignInInput
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={emailError ? { borderColor: 'red' } : null}
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
            <TogglePasswordButton
              type="button"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </TogglePasswordButton>
          </div>
          {passwordError && <ErrorMessage>Password is invalid</ErrorMessage>}
          <SignInButton disabled={!formValid} onClick={handleSignIn}>
            Sign In
          </SignInButton>
          <Link to="/signup" style={{ color: 'blue', textDecoration: 'none' }}>
            Sign Up
          </Link>
        </form>
      </SignInContainer>
    </SignInGlobalContainer>
  );
};

export default SignInComponent;
