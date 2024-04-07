import {
  Avatar,
  ContainerAvatar,
  Title,
  Upload,
  UploadWrapper,
} from './UploadImage.styled';
import sprite from '../../../assets/img/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAvatarThunk, currentThunk } from '../../../redux/auth/authThunk';


const UploadImage = () => {
  const userProfile = useSelector(currentThunk);
  const dispatch = useDispatch();

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    dispatch(UpdateAvatarThunk(formData));
  };
  return (
    <>
      <Title>Your photo</Title>
      <UploadWrapper>
        <ContainerAvatar>
          {!userProfile.avatarURL && (
            <div>
              {userProfile.userName
                ? userProfile.userName.split('')[0].toUpperCase()
                : 'V'}
            </div>
          )}
          {userProfile.avatarURL && (
            <Avatar src={userProfile.avatarURL} alt="AVATAR" weight="80px" />
          )}
        </ContainerAvatar>
        <Upload>
          <input
            name="photo"
            type="file"
            accept="image/*"
            onChange={handleUpload}
            id="upload"
            style={{ display: 'none' }}
          />
          <svg>
            <use href={`${sprite}#icon-arrow-up-tray`} />
          </svg>
          <p>Upload a photo</p>
        </Upload>
      </UploadWrapper>
    </>
  );
};

export default UploadImage;
