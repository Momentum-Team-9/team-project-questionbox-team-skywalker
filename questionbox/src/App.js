import { QuestionList } from './components/QuestionList.js';
import { Question } from './components/Question.js';
import { Login } from './components/Login.js';
import { Registration } from './components/Registration';
import { Header } from './components/Header.js';
import { Profile } from './components/Profile.js';
import { AnswerForm } from './components/AnswerForm.js';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import { useState, useEffect } from 'react';

function App() {
  const [auth, setAuth, { removeItem }] = useLocalStorageState('token', '');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(auth);
    if (auth) {
      axios
      .get('https://questionbox-team-skywalker.herokuapp.com/auth/users/me', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${auth}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
        setUsername(response.data[0].username);
      });
    }
  }, [auth]);

  return (
    <Router>
      <div className="App">
        <Header token={auth} setAuth={setAuth} clearStorage={removeItem} />
        <Switch>
          <Route
            path="/questions"
            component={() => <QuestionList token={auth} username={username} />}
          />
          <Route
            path="/question/:pk"
            component={(pk) => <Question props={pk} token={auth} />}
          />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={() => <Login setAuth={setAuth} />} />
          <Route exact path="/" component={QuestionList} />
          <Route path="/profile" component={() => <Profile token={auth} user={user} /> } />
          <Route exact path="/logout" component={QuestionList} />
          <Route path="answers/new" component={() => <AnswerForm token={auth} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
