// import logo from './logo.svg';
// import './App.css';
import "./Own.css";
import {FunText,Naming,Count,CountTwo} from "./FunctionalCom"
import TxtClass from "./Classname"
import ClassFun from "./ClassObject"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <FunText />
      <Naming />
      <Count />
      <CountTwo />

      <TxtClass />
    <ClassFun />

    </div>
  );
}

export default App;
