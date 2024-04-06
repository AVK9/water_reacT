import { Avatar, Title, Upload, UploadWrapper } from './UploadImage.styled';
import sprite from '../../../assets/img/sprite.svg';
import { useDispatch} from 'react-redux';
import { UpdateAvatarThunk } from '../../../redux/auth/authThunk';
import AvatarLogo from '../../../assets/img/AvatarLogo.png';

const UploadImage = () => {
  const avatar = AvatarLogo;
// const dispatch = useDispatch();
  // const handleUpload = (e) => {
  //   const userData = new FormData();
  //   userData.append('avatar', e.target.files[0]);
  //   dispatch(UpdateAvatarThunk(userData));
  // }
    return (
      <>
        <Title>Your photo</Title>
        <UploadWrapper>
          <Avatar id="avatar" src={avatar} alt="AVATAR" />
          <Upload>
            <input
              name="photo"
              type="file"
              accept="image/*"
              onChange=""
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
