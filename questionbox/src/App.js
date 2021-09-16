import { QuestionList } from './components/QuestionList.js';
import { Login } from './components/Login.js';
import { Header } from './components/Header.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/questions" component={QuestionList} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
