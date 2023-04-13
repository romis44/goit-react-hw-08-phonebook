import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';

import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Link to="/">Phonebook</Link>

      {isLoggedIn && <UserMenu />}
    </AppBar>
  );
}
