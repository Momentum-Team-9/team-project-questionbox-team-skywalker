import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './greenThumb.png';
export function Header({ token, setAuth, clearStorage }) {
  return (
    <nav className="navCont">
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
            <div className="navButtCont">
              <div className="nav1">
                <Link to="/profile">
                  <button className="navButt">Profile</button>
                </Link>
              </div>
              <div className="nav2">
                <a
                  href
                  onClick={() => {
                    clearStorage('token');
                    clearStorage('user');
                  }}
                >
                  <button className="navButt">Logout</button>
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="navButtCont">
              <div className="nav1">
                <Link to="/register">
                  <button className="navButt">Register</button>
                </Link>
              </div>
              <div className="nav2">
                <Link to="/login">
                  <button className="navButt">Login</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Header;
