import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import { Typography, Button } from '@mui/material';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h8" component="h2" marginLeft={1} color="#5acc5f">
        Welcome, <b>{user.name}</b>
      </Typography>

      <Button variant="contained" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </>
  );
}
