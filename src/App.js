import React from "react";

// components
import Header from "./components/ui/Header";
import logo from "./img/logo.png";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* header */}
      <header className="center">
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default App;
