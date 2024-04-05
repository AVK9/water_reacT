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
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from '../../redux/auth/selectors';
import { changeUserData } from '../../redux/auth/authThunk';
import { useFormik } from 'formik';




const SettingModalForm = () => {
 const userName = useSelector(profileSelector)
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const[name,setName] = useState();
  let [password, setPassword] = useState('');
  const [newPassword = '', setNewPassword] = useState('');
  const [confirmPassword = '', setConfirmPassword] = useState('');
 
  let isSubmit = true;

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
const dispatch = useDispatch();

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

  const handleSubmit = async ({ name },{resetForm}) => {
    if (newPassword === "") {
      await dispatch(changeUserData({name}))
    }else{
      await dispatch(changeUserData({name, newPassword}))
    }
    resetForm()
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
    e.preventDefault()
  }

  const formik = useFormik({
    initialValues: {
      name: userName
    },
    onSubmit: handleSubmit
  })
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
                  checked={gender === 'female'}
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
                  checked={gender === 'male'}
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
              value={email}
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
                onChange=""
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
                  onChange=""
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
                  onChange=""
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
