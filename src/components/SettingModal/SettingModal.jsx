import React from 'react';
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
} from './SettingModal.styled';

const SettingModal = () => {
  const state = {};
  return (
    <Form onSubmit="">
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
                  checked=""
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
                  checked=""
                />
                <span>Man</span>
              </label>
            </RadioWrapper>
          </GenderWrapper>
          <FieldWrapper>
            <LabelName>Your name:</LabelName>
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
          <LabelName>Email:</LabelName>
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
              <EyeButton>
                <svg>
                  <use href=""></use>
                </svg>
              </EyeButton>
              <Input
                type="password"
                name="password"
                onChange=""
                value=""
                id="exampleInputPassword1"
                placeholder="password"
              />
            </PasswordWrapper>
          </FieldWrapper>
          <FieldWrapper>
            <FormText>new Password</FormText>
            <div>
              <PasswordWrapper>
                <EyeButton>
                  <svg>
                    <use href=""></use>
                  </svg>
                </EyeButton>
                <Input
                  type="newPassword"
                  name="newPassword"
                  onChange=""
                  value=""
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
                <EyeButton>
                  <svg>
                    <use href=""></use>
                  </svg>
                </EyeButton>
                <Input
                  type="repeatPassword"
                  name="repeatPassword"
                  onChange=""
                  value=""
                  id="exampleInputPassword3"
                  placeholder="Repeat new password"
                />
              </PasswordWrapper>
            </div>
          </FieldWrapper>
        </div>
      </FormContainer>

      <StyledButton type="submit">Save</StyledButton>
    </Form>
  );
};

export default SettingModal;
