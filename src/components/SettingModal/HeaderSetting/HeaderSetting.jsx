import { Button, ContainerFuild } from './HeaderSetting.styled';

const HeaderSetting = ({ showModal }) => {
  return (
    <ContainerFuild>
      <Button onClick={showModal}>Setting</Button>
    </ContainerFuild>
  );
};

export default HeaderSetting;
