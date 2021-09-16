import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const Login = ({ setAuth }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        'https://questionbox-team-skywalker.herokuapp.com/auth/token/login/',
        {
          username: username,
          password: password,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.auth_token) {
          setAuth(res.data.auth_token);
          history.push('/');
        }
        setErrors('Incorrect credentials provided');
      });
  };

  const handleChange = (inputType, event) => {
    if (inputType === 'username') {
      setUsername(event.target.value);
    }
    if (inputType === 'password') {
      setPassword(event.target.value);
    }
  };

  return (
    <>
      <div className="logo">
        <p className="has-text-primary has-text-centered">Login</p>
        <i className="fas fa-paw" />
      </div>

      {errors && <p>{errors}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Username</label>
        <input
          className="input"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => handleChange('username', e)}
        />
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => handleChange('password', e)}
        />
        <div id="form-buttons">
          <button className="button is-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
};
