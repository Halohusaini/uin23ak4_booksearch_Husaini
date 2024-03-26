import React from "react";
import { useState } from "react";

export default function Search({ onSearchChange }) {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        onSearchChange(inputValue);
    };
  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Search books..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="sumbit">Search</button>
    </form>
  );
}
