import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="10"
        color="#1976d2"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </Wrapper>
  );
};
