import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Bars
        height="100"
        width="100"
        color="#9ebbff"
        ariaLabel="bars-loading"
        wrapperClass=""
        visible={true}
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
