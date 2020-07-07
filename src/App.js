import React, { useState, useEffect } from "react";

import axios from "axios";

// components
import Header from "./components/ui/Header";
import CharacterGrid from "./components/character/CharacterGrid";
import Search from "./components/ui/Search";
import logo from "./img/logo.png";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchItems();
  }, [query]);

  const fetchItems = async () => {
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );

    setItems(result.data);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
