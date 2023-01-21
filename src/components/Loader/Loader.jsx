import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots
        height="40"
        width="40"
        radius="8"
        color="#4d4c4c"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Wrapper>
  );
};
