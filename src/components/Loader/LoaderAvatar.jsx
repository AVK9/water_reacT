import { Bars } from 'react-loader-spinner';

export const LoaderAvatar = () => {
  return (
    <>
      <Bars
        height="80px"
        width="80px"
        borderRadius="50%"
        color="#9ebbff"
        display="flex"
        ariaLabel="bars-loading"
        alignItems="center"
        justifyContent=" center"
        fontSize="36px"
        wrapperClass=""
        visible={true}
        wrapperStyle={{
          position: 'relative',
          // top: '50%',
          // left: '50%',
          // transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
