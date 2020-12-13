import logo from './logo.svg';
import './App.css';
import './Navigation.css';

function Navigation() {
  return (
    <ul className="main-navigation">
      <li className="logo"><a href="#">The LOGO</a></li>
      <li className="push-right menu-item"><a href="#">Item 1</a></li>
      <li className="menu-item"><a href="#">Item 2</a></li>
      <li className="menu-item"><a href="#">Item 3</a></li>
      <li className="menu-item"><a href="#">Item 4</a></li>
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
    </div>
  );
}

export default App;
