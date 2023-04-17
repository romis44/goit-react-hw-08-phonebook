import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';

import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <NavLink
        style={{
          color: '#3e7ce7',
          background: '#bde39d',
          padding: 5,
          fontWeight: 600,
          fontSize: 30,
          textDecoration: 'none',
        }}
        to="/"
      >
        Phonebook
      </NavLink>

      {isLoggedIn && <UserMenu />}
    </AppBar>
  );
}
