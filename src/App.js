import React, {Component} from "react";

import Logo from "./components/Wrapper/Logo/Logo";
import styles from "../src/App.css"
import Choose from "./components/Wrapper/Choose/Choose";



function App() {
  return (
    <div className="App">
      <div className="container"> 
          <Logo/>
          <Choose/>
      </div>
    </div>
  );
}

export default App;
