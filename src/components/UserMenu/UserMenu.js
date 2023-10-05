import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authoperations';
import { useAuth } from 'hooks';
import { UserMenuStyles } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyles>
      <p >Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuStyles>
  );
};
