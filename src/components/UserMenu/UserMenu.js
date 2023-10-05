import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authoperations';
import { useAuth } from 'hooks';
import { UserMenuButton, UserMenuStyles } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyles>
      <p >Welcome, {user.name}</p>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </UserMenuStyles>
  );
};
