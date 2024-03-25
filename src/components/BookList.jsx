import React from "react";
import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <div>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
