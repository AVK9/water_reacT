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

import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from '../../redux/auth/selectors';
import { refreshThunk } from '../../redux/auth/authThunk';
import { useFormik } from 'formik';

const SettingModalForm = ({ closeModal }) => {
  const profile = useSelector(profileSelector);
  const userEmail = profile.email;
  const userName = userEmail ? userEmail.split('@')[0] : '';


  const userGender = profile.gender;
  console.log('profile =>', profile);



  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (
    { name, email, gender, password, newPassword },
    { resetForm }
  ) => {
    if (newPassword === '') {
      await dispatch(refreshThunk({ name, email, gender }));
    } else {
      await dispatch(
        refreshThunk({ name, email, gender, password, newPassword })
      );
    }
    resetForm();
    closeModal();
    // const handleChangePassword = (e) => {
    //   setConfirmPassword(e.target.value);
    // };

    // const handleChangeNewPassword = (e) => {
    //   setNewPassword(e.target.value);
    // };

    // const handleChangeOldPassword = (e) => {
    //   setPassword(e.target.value);
    // };

    // const handleChangeName = (e) => {
    //   setName(e.target.value);
    // }

    // const handleChangeEmail = (e) => {
    //   setEmail(e.target.value);
    // }

    // const handleChangeGender = (e) => {
    //   setGender(e.target.value);
    // }

    // e.preventDefault();
    // if (password && !newPassword) {
    //   toast.error('Please enter new password');
    //   return;
    // }
    // if (!password && newPassword) {
    //   toast.error('Please enter old password');
    //   return;
    // }
    // if (newPassword !== confirmPassword) {
    //   toast.error('Passwords do not match');
    //   return;
    // }
    // isSubmit = false;
    // setNewPassword(newPassword);
    // toast.success('Update successfully');

  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name: userName,
      gender: userGender,
      email: userEmail,
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: handleSubmit,
  });


  return (
    <Form onSubmit={handleSubmit}>
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
              style={
                formik.touched.name &&
                formik.errors.name && { borderColor: '#EF5050' }
              }
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onblur={formik.handleBlur}
              placeholder="Name"
              autoComplete="username"
              required
            />
            {formik.touched.name && formik.errors.name && (
              <FormText>{formik.errors.name}</FormText>
            )}
          </FieldWrapper>
          <LabelName>Email</LabelName>
          <FieldWrapper>
            <Input
              style={
                formik.touched.email &&
                formik.errors.email && { borderColor: '#EF5050' }
              }
              type="email"
              name="email"
              id="InputEmail1"
              aria-describedby="emailHelp"

              onChange={formik.handleChange}
              value={formik.values.email}
              onblur={formik.handleBlur}

              placeholder="Email"
              autoComplete="email"
              required
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
                onClick={() => setIsShowPassword(!isShowPassword)}
                onMouseDown={handleMouseDownPassword}
              >
                <svg>
                  <use href={`${sprite}#icon-eye-slash`} />
                </svg>
              </EyeButton>
              <Input
                style={
                  formik.touched.password &&
                  formik.errors.password && {
                    borderColor: '#EF5050',
                  }
                }
                type={isShowPassword ? 'text' : 'password'}
                name="password"

                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}

                id="exampleInputPassword1"
                placeholder="password"
              />
              {formik.touched.password && formik.errors.password && (
                <TextError>{formik.errors.password}</TextError>
              )}
            </PasswordWrapper>
          </FieldWrapper>
          <FieldWrapper>
            <FormText>new Password</FormText>
            <div>
              <PasswordWrapper>
                <EyeButton
                  onClick={() => setIsShowNewPassword(!isShowNewPassword)}
                >
                  <svg>
                    <use href={`${sprite}#icon-eye-slash`} />
                  </svg>
                </EyeButton>
                <Input
                  type={isShowNewPassword ? 'text' : 'password'}
                  name="newPassword"
                  onChange=""

                  value="{newPassword}"

                  id="exampleInputPassword2"
                  placeholder="New Password"
                />
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
                >
                  <svg>
                    <use href={`${sprite}#icon-eye-slash`} />
                  </svg>
                </EyeButton>
                <Input
                  type={isShowConfirmPassword ? 'text' : 'password'}
                  name="repeatPassword"
                  onChange=""

                  value="{confirmPassword}"

                  id="exampleInputPassword3"
                  placeholder="Repeat new password"
                />
              </PasswordWrapper>
            </div>
          </FieldWrapper>
        </div>
      </FormContainer>

      <StyledButton disabled="{!isSubmit}" type="submit">
        Save
      </StyledButton>
    </Form>
  );
};

export default SettingModalForm;
