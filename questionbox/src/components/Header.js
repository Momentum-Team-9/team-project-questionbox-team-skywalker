import React from 'react';
import { Link } from 'react-router-dom';
export function Header({ token }) {
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
            <Link to="/logout">
              <li>Logout</li>
            </Link>
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
