import React from 'react';
import { Link } from 'react-router-dom';
export function Header({ token, setAuth, clearStorage }) {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/questions">
          <h3>GreenThumb</h3>
        </Link>
        {token ? (
          <>
            <Link to="/profile">
              <li>Profile</li>
            </Link>
            <a onClick={() => clearStorage('token')}>
              <li>Logout</li>
            </a>
          </>
        ) : (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Header;
