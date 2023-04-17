import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

export default function AuthNav() {
  const StyledLink = styled(NavLink)`
    padding: 8px 8px;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;

    &.active {
      color: rgb(55, 128, 31);
    }
  `;

  return (
    <>
      <nav>
        <StyledLink to="login">Login</StyledLink>

        <StyledLink to="register" style={{ marginLeft: '10px' }}>
          Register
        </StyledLink>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
