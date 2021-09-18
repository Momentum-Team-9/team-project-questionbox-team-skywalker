import { QuestionList } from './components/QuestionList.js';
import { Question } from './components/Question.js';
import { Login } from './components/Login.js';
import { Registration } from './components/Registration';
import { Header } from './components/Header.js';
import { Profile } from './components/Profile.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import { useEffect } from 'react';

function App() {
  const [auth, setAuth, { removeItem }] = useLocalStorageState('token', '');

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <Router>
      <div className="App">
        <Header token={auth} setAuth={setAuth} clearStorage={removeItem} />
        <Switch>
          <Route
            path="/questions"
            component={() => <QuestionList token={auth} />}
          />
          <Route path="/question/:pk" component={Question} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={() => <Login setAuth={setAuth} />} />
          <Route exact path="/" component={QuestionList} />
          <Route path="/profile" component={() => <Profile token={auth} />} />
          <Route exact path="/logout" component={QuestionList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
