import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const Registration = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRe_Password] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://questionbox-team-skywalker.herokuapp.com/auth/users/', {
        username,
        first_name,
        last_name,
        email,
        password,
        re_password,
      })
      .then((res) => {
        return axios
          .post(
            'https://questionbox-team-skywalker.herokuapp.com/auth/token/login/',
            {
              username: username,
              password: password,
            }
          )
          .then((data) => {
            if (data && data.data.auth_token) {
              setAuth(data.data.auth_token);
              history.push('/questions');
            }
          });
      });
  };

  const handleChange = (inputType, event) => {
    if (inputType === 'username') {
      setUsername(event.target.value);
    }
    if (inputType === 'first_name') {
      setFirstName(event.target.value);
    }
    if (inputType === 'last_name') {
      setLastName(event.target.value);
    }
    if (inputType === 'email') {
      setEmail(event.target.value);
    }
    if (inputType === 'password') {
      setPassword(event.target.value);
    }
    if (inputType === 're_password') {
      setRe_Password(event.target.value);
    }
  };

  return (
    <div className="regContainer">
      <form className="formContainer" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="plantlov3r"
          value={username}
          onChange={(e) => handleChange('username', e)}
        />
        <label>First Name</label>
        <input
          type="text"
          placeholder="Fern"
          value={first_name}
          onChange={(e) => handleChange('first_name', e)}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Leaf"
          value={last_name}
          onChange={(e) => handleChange('last_name', e)}
        />
        <label>email</label>
        <input
          type="text"
          placeholder="plantlov3r@trees.org"
          value={email}
          onChange={(e) => handleChange('email', e)}
        />
        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => handleChange('password', e)}
        />
        <input
          placeholder="re-enter password"
          type="password"
          value={re_password}
          onChange={(e) => handleChange('re_password', e)}
        />
        <div id="form-buttons">
          <button className="form-buttons" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
