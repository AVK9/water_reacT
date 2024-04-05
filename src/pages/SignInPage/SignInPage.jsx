import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
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
  Form,
  DesktopBg
} from './SignInPage.styled';
import sprite from '../../assets/img/sprite.svg'; 

import { Link, useNavigate } from 'react-router-dom';
import { loginThunk, currentThunk } from '../../redux/auth/authThunk';
import { isAuthSelector } from '../../redux/auth/selectors';
import { Section } from '../../components/Section/Section';

const SignInComponent = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();

   useEffect(() => {
     isAuth && navigate('/home');
   }, [isAuth, navigate]);

  const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); 
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.email || !values.email.includes('@')) {
        errors.email = 'Email is invalid';
      }

      if (!values.password || values.password.length < 6) {
        errors.password = 'Password is invalid';
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        await dispatch(loginThunk({ email: values.email, password: values.password }));
        await dispatch(currentThunk());
      } catch (error) {
        console.error('Error during login:', error);
      }
    },
  });

  return (
    <DesktopBg>
      <Section>
        <SignInGlobalContainer>
          <SignInwater></SignInwater>
          <SignInContainer>
            <SignInTitle>Sign In</SignInTitle>
            <Form onSubmit={formik.handleSubmit}>
              <SignInLabel>Enter your email</SignInLabel>
              <SignInInput
                type="email"
                name="email"
                placeholder="E-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
                error={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              )}

              <SignInLabel>Enter your password</SignInLabel>
              <div style={{ position: 'relative' }}>
                <SignInInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && formik.errors.password}
                />
                <TogglePasswordButton
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <svg>
                    <use
                      href={`${sprite}#${
                        showPassword ? 'icon-eye' : 'icon-eye-slash'
                      }`}
                    />
                  </svg>
                </TogglePasswordButton>
              </div>
              {formik.touched.password && formik.errors.password && (
                <ErrorMessage>{formik.errors.password}</ErrorMessage>
              )}

              <SignInButton type="submit" disabled={!formik.isValid}>
                Sign In
              </SignInButton>
            </Form>
            <Link
              to="/signup"
              style={{ color: ' #407bff', textDecoration: 'none' }}
            >
              Sign Up
            </Link>
          </SignInContainer>
        </SignInGlobalContainer>
      </Section>
    </DesktopBg>
  );
};

export default SignInComponent;
