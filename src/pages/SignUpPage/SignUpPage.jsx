import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  SignUpGlobalContainer,
  SignUpContainer,
  SignUpTitle,
  SignUpLabel,
  SignUpInput,
  SignUpButton,
  SignUpwater,
  TogglePasswordButton,
  ErrorMessage,
} from './SignUpPage.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { isAuthSelector } from './../../redux/auth/selectors';
import { signUpThunk } from './../../redux/auth/authThunk';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] =
    useState('');
  const [formValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

  useEffect(() => {
    if (emailError || passwordError || repeatPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, repeatPasswordError]);

  const handleSignUp = () => {
    // Валідація електронної пошти
    if (!email || !email.includes('@')) {
      setEmailErrorMessage('Please enter a valid email address.');
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // Валідація пароля
    if (!password || password.length < 6) {
      setPasswordErrorMessage(
        'Please enter a password with at least 6 characters.'
      );
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    // Перевірка, чи паролі співпадають
    if (password !== repeatPassword) {
      setRepeatPasswordErrorMessage('Passwords do not match.');
      setRepeatPasswordError(true);
    } else {
      setRepeatPasswordError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email :>> ', email);
    console.log('password :>> ', password);
    dispatch(signUpThunk({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };

  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth && navigate('/home');
  }, [isAuth, navigate]);

  return (
    <SignUpGlobalContainer>
      <SignUpwater></SignUpwater>
      <SignUpContainer>
        <form onSubmit={handleSubmit}>
          <SignUpTitle>Sign Up</SignUpTitle>
          <SignUpLabel>Enter your email</SignUpLabel>
          <SignUpInput
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={emailError ? { borderColor: 'red' } : null}
          />
          {emailError && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}

          <SignUpLabel>Enter your password</SignUpLabel>
          <div style={{ position: 'relative' }}>
            <SignUpInput
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
          {passwordError && <ErrorMessage>{passwordErrorMessage}</ErrorMessage>}

          <SignUpLabel>Repeat password</SignUpLabel>
          <div style={{ position: 'relative' }}>
            <SignUpInput
              type={repeatPasswordVisible ? 'text' : 'password'}
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              style={repeatPasswordError ? { borderColor: 'red' } : null}
            />
            <TogglePasswordButton
              type="button"
              onClick={toggleRepeatPasswordVisibility}
            >
              <FontAwesomeIcon
                icon={repeatPasswordVisible ? faEyeSlash : faEye}
              />
            </TogglePasswordButton>
          </div>
          {repeatPasswordError && (
            <ErrorMessage>{repeatPasswordErrorMessage}</ErrorMessage>
          )}

          <SignUpButton onClick={handleSignUp} disabled={!formValid}>
            Sign Up
          </SignUpButton>
          <Link to="/signin" style={{ color: 'blue', textDecoration: 'none' }}>
            Sign In
          </Link>
        </form>
      </SignUpContainer>
    </SignUpGlobalContainer>
  );
};

export default SignUpComponent;
