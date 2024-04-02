import { Avatar, Title, Upload, UploadWrapper } from './UploadImage.styled';
import sprite from '../../../assets/img/sprite.svg';
const UploadImage = () => {
  return (
    <>
      <Title>Your photo</Title>
      <UploadWrapper>
        <Avatar id="avatar" src="" alt="AVATAR" />
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
