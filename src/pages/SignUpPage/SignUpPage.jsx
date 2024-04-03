import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
} from './SignUpPage.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { isAuthSelector } from './../../redux/auth/selectors';
import { signUpThunk } from './../../redux/auth/authThunk';
import { Section } from '../../components/Section/Section';

const SignUpComponent = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

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
    onSubmit: (values) => {
      dispatch(signUpThunk({ email: values.email, password: values.password }));
    },
  });

  const togglePasswordVisibility = () => {
    formik.setFieldValue('passwordVisible', !formik.values.passwordVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    formik.setFieldValue(
      'repeatPasswordVisible',
      !formik.values.repeatPasswordVisible
    );
  };

  return (
    <Section>
      <SignUpGlobalContainer>
        <SignUpwater></SignUpwater>
        <SignUpContainer>
          {/* <form onSubmit={formik.handleSubmit}> */}
            <SignUpTitle>Sign Up</SignUpTitle>
            <SignUpLabel>Enter your email</SignUpLabel>
            <SignUpInput
              type="email"
              name="email"
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            )}

            <SignUpLabel>Enter your password</SignUpLabel>
            <div style={{ position: 'relative' }}>
              <SignUpInput
                type={formik.values.passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
              />
              <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon
                  icon={formik.values.passwordVisible ? faEyeSlash : faEye}
                />
              </TogglePasswordButton>
            </div>
            {formik.touched.password && formik.errors.password && (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            )}

            <SignUpLabel>Repeat password</SignUpLabel>
            <div style={{ position: 'relative' }}>
              <SignUpInput
                type={formik.values.repeatPasswordVisible ? 'text' : 'password'}
                name="repeatPassword"
                placeholder="Repeat Password"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.repeatPassword && formik.errors.repeatPassword}
              />
              <TogglePasswordButton
                type="button"
                onClick={toggleRepeatPasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={formik.values.repeatPasswordVisible ? faEyeSlash : faEye}
                />
              </TogglePasswordButton>
            </div>
            {formik.touched.repeatPassword && formik.errors.repeatPassword && (
              <ErrorMessage>{formik.errors.repeatPassword}</ErrorMessage>
            )}

            <SignUpButton type="submit" disabled={!formik.isValid}>
              Sign Up
            </SignUpButton>
            <Link to="/signin" style={{ color: 'blue', textDecoration: 'none' }}>
              Sign In
            </Link>
          {/* </form> */}
        </SignUpContainer>
      </SignUpGlobalContainer>
    </Section>
  );
};

export default SignUpComponent;
