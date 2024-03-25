import React from "react";

export default function Search({ onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
