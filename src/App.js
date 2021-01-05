import React from "react";
import "./App.css";

import Timezones from "./components/timezones/Container";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Timezones APP</h1>
      </div>
      <Timezones />
      <footer>
        <div className="footer">Built by Esteban Ruiz de Galarreta - 2021</div>
      </footer>
    </div>
  );
}

export default App;
