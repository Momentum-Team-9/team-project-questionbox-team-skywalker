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
              <button>Profile</button>
            </Link>

            <a href onClick={() => clearStorage('token')}>
              <button>Logout</button>
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