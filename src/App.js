import React, { useState, useEffect } from "react";

import axios from "axios";

// components
import Header from "./components/ui/Header";
import CharacterGrid from "./components/character/CharacterGrid";
import logo from "./img/logo.png";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters`);

    console.log(result.data);

    setItems(result.data);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
