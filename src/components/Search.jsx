import React from "react";
import { useState } from "react";

export default function Search({ onSearchChange }) {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        if (inputValue.length >= 3) {
          onSearchChange(inputValue);
        } else {
          alert("Skriv minst 3 bokstaver for å søke opp bøker")
        }
        
    };

    console.log(onSearchChange)
  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Søk i bøker..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="sumbit">Søk</button>
    </form>
  );
}
