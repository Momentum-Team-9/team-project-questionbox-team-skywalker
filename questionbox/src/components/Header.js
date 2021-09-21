import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './greenThumb.png';
export function Header({ token, setAuth, clearStorage }) {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/questions">
          <img
            className="logo"
            src="/images/greenThumb.png"
            alt="GreenThumb logo"
          />
        </Link>

        {token ? (
          <>
            <Link to="/profile">
              <button className="navButt">Profile</button>
            </Link>

            <a
              href
              onClick={() => {
                clearStorage('token');
                clearStorage('user');
              }}
            >
              <button className="navButt">Logout</button>
            </a>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="navButt">Register</button>
            </Link>

            <Link to="/login">
              <button className="navButt">Login</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Header;
