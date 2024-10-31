import logo from './logo.svg';
import './App.css';

export default function App() {
  const nowYear = new Date().getFullYear()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{nowYear}</p>
      </header>
    </div>
  );
}

