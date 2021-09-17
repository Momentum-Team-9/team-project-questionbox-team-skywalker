
import { QuestionList } from './components/QuestionList.js';
import { Login } from './components/Login.js';
import { Header } from './components/Header.js';
import { Profile } from './components/Profile.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state'
import { useEffect } from 'react';

function App() {
  const [auth, setAuth, { removeItem }] = useLocalStorageState ('token', '')

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <Router>
      <div className="App">
        <Header token={auth} clearStorage={removeItem} />
        <Switch>
          <Route path="/questions" component={() => <QuestionList token={auth} />} />
          <Route path="/login" component={() => <Login setAuth={setAuth} />} />
          <Route exact path="/" component={QuestionList} />
          <Route path="/profile" component={() => <Profile token={auth} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
