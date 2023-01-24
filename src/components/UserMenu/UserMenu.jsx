import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, UserName, Btn, Span } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>
        Welcome, <Span>{user.name}!</Span>
      </UserName>
      <Btn
        type="button"
        variant="contained"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Btn>
    </Wrapper>
  );
};
