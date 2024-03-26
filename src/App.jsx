import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Search from "./components/Search";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm) || 'James Bond'}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setBooks(data.docs);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };


    if (!searchTerm || searchTerm.length > 2){
      fetchBooks();
    }
  }, [searchTerm]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
            <Search onSearchChange={setSearchTerm} />
            <BookList books={books} />
            </>
          } />
          <Route path="/book/:bookId" element={<BookDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;