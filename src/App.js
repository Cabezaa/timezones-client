import React from "react";
import "./App.css";

import Timezones from "./components/timezones/Container";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>A list of Timezones</h1>
      </div>
      <Timezones />
      <footer>
        <div className="footer">Built by Esteban Ruiz de Galarreta - 2021</div>
      </footer>
    </div>
  );
}

export default App;
