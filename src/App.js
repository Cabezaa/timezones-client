import React from "react";
import "./App.css";

import Timezones from "./components/timezones/Container";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Timezones APP</h1>
      </div>
      <body className="body">
        <Timezones />
      </body>
      <footer className="footer">
        Built by Esteban Ruiz de Galarreta - 2021
      </footer>
    </div>
  );
}

export default App;
