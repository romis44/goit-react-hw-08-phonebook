import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography variant="h6" component="h2">
        Welcome to the Phonebook!
        <br />
        To continue please login or register!
      </Typography>

      <div>
        <Link
          to="authentication/login"
          style={{
            marginRight: '10px',
            color: '#2742b9',
            fontWeight: 500,
            fontSize: 20,
            textDecoration: 'none',
          }}
        >
          Login
        </Link>

        <Link
          to="authentication/register"
          style={{
            color: '#2742b9',
            fontWeight: 500,
            fontSize: 20,
            textDecoration: 'none',
          }}
        >
          Register
        </Link>
      </div>
    </>
  );
}
