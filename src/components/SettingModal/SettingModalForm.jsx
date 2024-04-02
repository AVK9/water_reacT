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
} from './SettingModalForm.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const SettingModalForm = () => {
  let [password, setPassword] = useState('');
  const [newPassword = '', setNewPassword] = useState('');
  const [confirmPassword = '', setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  let isSubmit = true;

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const state = {
    password: password,
    newPassword: newPassword,
  };

  const handleChangePassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeOldPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && !newPassword) {
      toast.error('Please enter new password');
      return;
    }
    if (!password && newPassword) {
      toast.error('Please enter old password');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    isSubmit = false;
    setNewPassword(newPassword);
    dispatch(UpdateUserData(state));
    toast.success('Update successfully');
  };
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
                  onChange=""
                  checked="female"
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
                  onChange=""
                  checked="male"
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
              onChange=""
              value=""
              placeholder="Name"
              autoComplete="username"
              required
            />
          </FieldWrapper>
          <LabelName>Email</LabelName>
          <FieldWrapper>
            <Input
              type="email"
              name="email"
              id="InputEmail1"
              aria-describedby="emailHelp"
              onChange=""
              value=""
              placeholder="Email"
              autoComplete="email"
              required
            />
          </FieldWrapper>
        </div>
        <div>
          <StyledLabel>Password</StyledLabel>
          <FieldWrapper>
            <FormText>Outdate password:</FormText>
            <PasswordWrapper>
              <EyeButton onClick={() => setIsShowPassword(!isShowPassword)}>
                <svg>
                  <use href={`${sprite}#icon-eye-slash`} />
                </svg>
              </EyeButton>
              <Input
                type={isShowPassword ? 'text' : 'password'}
                name="password"
                onChange={handleChangeOldPassword}
                value={password}
                id="exampleInputPassword1"
                placeholder="password"
              />
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
                  onChange={handleChangeNewPassword}
                  value={newPassword}
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
                  onChange={handleChangePassword}
                  value={confirmPassword}
                  id="exampleInputPassword3"
                  placeholder="Repeat new password"
                />
              </PasswordWrapper>
            </div>
          </FieldWrapper>
        </div>
      </FormContainer>

      <StyledButton disabled={!isSubmit} type="submit">
        Save
      </StyledButton>
    </Form>
  );
};

export default SettingModalForm;
