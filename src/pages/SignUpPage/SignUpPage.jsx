import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
  Form,
  FirstWaterBulb,
  SecondWaterBulb,
  ThirdWaterBulb,
  FourthWaterBulb,
  FifthWaterBulb,
  StyledLink,
  TextLink,
} from './SignUpPage.styled';

import sprite from '../../assets/img/sprite.svg';

import { signUpThunk } from './../../redux/auth/authThunk';
import { Section } from '../../components/Section/Section';

const SignUpComponent = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      dispatch(signUpThunk({ email: values.email, password: values.password }))
        .then((response) => {
          if (response.error && response.error.message === 'Rejected') {
            formik.setFieldError('email', 'This email is already registered');
          }
          setSubmitting(false);
        })
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            formik.setFieldError('email', 'This email is already registered');
          } else {
            console.error('Error:', error);
          }
          setSubmitting(false);
        });
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword((prevState) => !prevState);
  };

  return (
    <Section>
      <SignUpGlobalContainer>
        <SignUpwater></SignUpwater>
        <SignUpContainer>
          <SignUpTitle>Sign Up</SignUpTitle>

          <FirstWaterBulb />
          <SecondWaterBulb />
          <ThirdWaterBulb />
          <FourthWaterBulb />
          <FifthWaterBulb />

          <Form onSubmit={formik.handleSubmit}>
            <SignUpLabel>Enter your email</SignUpLabel>
            <SignUpInput
              type="email"
              name="email"
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              $error={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            )}

            <SignUpLabel>Enter your password</SignUpLabel>
            <div style={{ position: 'relative' }}>
              <SignUpInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                $error={formik.touched.password && formik.errors.password}
              />

              <TogglePasswordButton
                type="button"
                onClick={togglePasswordVisibility}
              >
                <svg>
                  <use
                    href={`${sprite}#${
                      showPassword ? 'eye' : 'eye-slash'
                    }`}
                  />
                </svg>
              </TogglePasswordButton>
            </div>
            {formik.touched.password && formik.errors.password && (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            )}

            <SignUpLabel>Repeat password</SignUpLabel>
            <div style={{ position: 'relative' }}>
              <SignUpInput
                type={showRepeatPassword ? 'text' : 'password'}
                name="repeatPassword"
                placeholder="Repeat Password"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                $error={
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                }
              />
              <TogglePasswordButton
                type="button"
                onClick={toggleRepeatPasswordVisibility}
              >
                <svg>
                  <use
                    href={`${sprite}#${
                      showRepeatPassword ? 'eye' : 'eye-slash'
                    }`}
                  />
                </svg>
              </TogglePasswordButton>
            </div>
            {formik.touched.repeatPassword && formik.errors.repeatPassword && (
              <ErrorMessage>{formik.errors.repeatPassword}</ErrorMessage>
            )}

            <SignUpButton
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Sign Up
            </SignUpButton>

            <StyledLink to="/signin">
              <TextLink>Sign In</TextLink>
            </StyledLink>
          </Form>
        </SignUpContainer>
      </SignUpGlobalContainer>
    </Section>
  );
};

export default SignUpComponent;
