import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavStyles } from 'components/UserMenu/UserMenu.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavStyles>
      <NavLink  to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts">
          Contacts
        </NavLink>
      )}
    </NavStyles>
  );
};
