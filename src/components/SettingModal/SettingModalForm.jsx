import { useState } from 'react';
import sprite from '../../assets/img/sprite.svg';
import {
  EyeButton,
  FieldWrapper,
  Form,
  FormContainer,
  FormText,
  GenderWrapper,
  Input,
  LabelName,
  PasswordWrapper,
  RadioWrapper,
  StyledButton,
  StyledLabel,
  TextError,
} from './SettingModalForm.styled';

import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { currentThunk } from '../../redux/auth/authThunk';

const SettingModalForm = ({ closeModal }) => {
  const userEmail = useSelector((state) => state.auth.profile.email);
  const userGender = useSelector((state) => state.auth.profile.gender);
  const userName = useSelector((state) => state.auth.profile.userName);
  const dispatch = useDispatch();

  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isShowOldPassword, setIsShowOldPassword] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const UserSettingShema = yup.object().shape({
    gender: yup.string().required(),
    name: yup
      .string()
      .max(32, 'max length 32')
      .matches(
        /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+$/,
        'Name should only contain letters (Latin, Ukrainian or Cyrillic)'
      ),
    email: yup.string().matches(emailPattern, 'Email is not valid'),
    oldPassword: yup
      .string()
      .min(8, 'Password must be at least 6 characters')
      .max(64, 'Max length 64')
      .when('newPassword', (newPassword, field) =>
        newPassword[0] ? field.required() : field
      ),
    newPassword: yup
      .string()
      .min(8, 'Password must be at least 6 characters')
      .max(64, 'Max length 64')
      .nullable()
      .test(
        'differentPassword',
        'The new password must differ from the old one.',
        function (value) {
          const oldPassword = this.resolve(yup.ref('oldPassword'));
          return !oldPassword || value !== oldPassword;
        }
      ),
    repeatPassword: yup
      .string()
      .min(8, 'Password must be at least 6 characters')
      .max(64, 'Max length 64')
      .test('commonPassword', 'Passwords do not match.', function (value) {
        const newPassword = this.resolve(yup.ref('newPassword'));
        return !newPassword || String(value) === String(newPassword);
      }),
  });

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name: userName,
      gender: userGender,
      email: userEmail,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: UserSettingShema,
    onSubmit: (values) => {
      dispatch(
        currentThunk({
          gender: values.gender,
          userName: values.name,
          email: values.email,
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        })
      )
        .unwrap()
        .then(() => closeModal());
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormContainer>
        <div>
          <StyledLabel>Your gender identity:</StyledLabel>
          <GenderWrapper>
            <RadioWrapper>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                  checked={formik.values.gender === 'female'}
                />
                <span>Woman</span>
              </label>
            </RadioWrapper>
            <RadioWrapper>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                  checked={formik.values.gender === 'male'}
                />
                <span>Man</span>
              </label>
            </RadioWrapper>
          </GenderWrapper>
          <LabelName>Your name</LabelName>
          <FieldWrapper>
            <Input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onblur={formik.handleBlur}
              placeholder="Name"
              autoComplete="username"
              error={formik.touched.name && formik.errors.name}
            />
            {formik.touched.name && formik.errors.name && (
              <TextError>{formik.errors.name}</TextError>
            )}
          </FieldWrapper>
          <LabelName>Email</LabelName>
          <FieldWrapper>
            <Input
              type="email"
              name="email"
              id="InputEmail1"
              aria-describedby="emailHelp"
              onChange={formik.handleChange}
              value={formik.values.email}
              onblur={formik.handleBlur}
              placeholder="Email"
              autoComplete="email"
              $error={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email && (
              <TextError>{formik.errors.email}</TextError>
            )}
          </FieldWrapper>
        </div>
        <div>
          <StyledLabel>Password</StyledLabel>
          <FieldWrapper>
            <FormText>Outdate password:</FormText>
            <PasswordWrapper>
              <EyeButton
                onClick={() => setIsShowOldPassword(!isShowOldPassword)}
                onMouseDown={handleMouseDownPassword}
              >
                <svg>
                  <use
                    href={`${sprite}#${
                      isShowOldPassword ? 'icon-eye' : 'icon-eye-slash'
                    }`}
                  />
                </svg>
              </EyeButton>
              <Input
                style={
                  formik.touched.oldPassword &&
                  formik.errors.oldPassword && { borderColor: '#EF5050 ' }
                }
                type={isShowOldPassword ? 'text' : 'password'}
                id="oldPassword"
                onChange={formik.handleChange}
                value={formik.values.oldPassword}
                onBlur={formik.handleBlur}
                placeholder="Old password"
              />
              {formik.touched.oldPassword && formik.errors.oldPassword && (
                <TextError>{formik.errors.oldPassword}</TextError>
              )}
            </PasswordWrapper>
          </FieldWrapper>
          <FieldWrapper>
            <FormText>new Password</FormText>
            <div>
              <PasswordWrapper>
                <EyeButton
                  onClick={() => setIsShowNewPassword(!isShowNewPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  <svg>
                    <use
                      href={`${sprite}#${
                        isShowNewPassword ? 'icon-eye' : 'icon-eye-slash'
                      }`}
                    />
                  </svg>
                </EyeButton>
                <Input
                  style={
                    formik.touched.newPassword &&
                    formik.errors.newPassword && { borderColor: '#EF5050 ' }
                  }
                  type={isShowNewPassword ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  value={formik.values.newPassword}
                  onBlur={formik.handleBlur}
                  id="newPassword"
                  placeholder="New Password"
                />
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <TextError>{formik.errors.newPassword}</TextError>
                )}
              </PasswordWrapper>
            </div>
          </FieldWrapper>
          <FieldWrapper>
            <FormText>Repeat new password</FormText>
            <div>
              <PasswordWrapper>
                <EyeButton
                  onClick={() =>
                    setIsShowConfirmPassword(!isShowConfirmPassword)
                  }
                  onMouseDown={handleMouseDownPassword}
                >
                  <svg>
                    <use
                      href={`${sprite}#${
                        isShowConfirmPassword ? 'icon-eye' : 'icon-eye-slash'
                      }`}
                    />
                  </svg>
                </EyeButton>
                <Input
                  style={
                    formik.touched.repeatPassword &&
                    formik.errors.repeatPassword && {
                      borderColor: '#EF5050 ',
                    }
                  }
                  type={isShowConfirmPassword ? 'text' : 'password'}
                  id="repeatPassword"
                  onChange={formik.handleChange}
                  value={formik.values.repeatPassword}
                  onBlur={formik.handleBlur}
                  placeholder="Repeat new password"
                />
                {formik.touched.repeatPassword &&
                  formik.errors.repeatPassword && (
                    <TextError>{formik.errors.repeatPassword}</TextError>
                  )}
              </PasswordWrapper>
            </div>
          </FieldWrapper>
        </div>
      </FormContainer>

      <StyledButton disabled={!formik.isValid} type="submit">
        Save
      </StyledButton>
    </Form>
  );
};

export default SettingModalForm;
