// import logo from "./logo.svg";
// import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
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
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
