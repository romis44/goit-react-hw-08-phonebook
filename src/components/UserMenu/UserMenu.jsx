import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <p>
        Welcome, <b>{user.name}</b>
      </p>

      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </>
  );
}
