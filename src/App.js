import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      {/* <div className="main"> */}
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route component={PageNotFound} />
        </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
