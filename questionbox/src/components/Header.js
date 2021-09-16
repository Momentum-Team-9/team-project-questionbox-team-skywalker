import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav>
      <h3>GreenThumb</h3>
      <ul className="nav-links">
        <Link to="/questions">
          <li>QuestionList</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Header;
