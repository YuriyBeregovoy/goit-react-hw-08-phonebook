import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { HeaderStyles } from 'components/Container.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyles>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyles>
  );
};
