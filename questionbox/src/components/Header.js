import React from 'react';
import { Link } from 'react-router-dom';

export function Header({ token, setAuth, clearStorage }) {
  return (
    <nav>
      <h1>Welcome to GreenThumb</h1>
      <ul className="nav-links">
        {token ? (
        <>
        <Link to="/questions">
          <h3>Home</h3>
        </Link>

        <Link to="/questions">
          <h3>Questions</h3>
        </Link>

            <Link to="/profile">
              <h3>Profile</h3>
            </Link>

            <a href onClick={() => clearStorage('token')}>
              <Link to="/questions">
              <p>Logout</p>
              </Link>
            </a>
          </>
        ) : (
          <>
            <Link to="/register">
              <button>Register</button>
            </Link>

            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Header;
