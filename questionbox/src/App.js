import { useState, useEffect } from 'react';
import { QuestionList } from './components/QuestionList.js';
import { Login } from './components/Login.js';
import { Header } from './components/Header.js';
import { Profile } from './components/Profile.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [auth, setAuth] = useState('');

  useEffect(() => {
    console.log(auth);
  }, [auth]);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/questions" component={QuestionList} />
          <Route path="/login" component={() => <Login setAuth={setAuth} />} />
          <Route exact path='/' component={ QuestionList } />
          <Route path="/profile" component={() => <Profile token={auth} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
