import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/main.scss'

import Layout from "./components/Layout";
import Search from "./components/Search";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";

function App() {
  const [books, setBooks] = useState([]);
  

  
    const fetchBooks = async (query) => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setBooks(data.docs);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };


    const handleSearchSumbit = (query) => {
      fetchBooks(query);
    }
    

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
            <Search onSearchChange={handleSearchSumbit} />
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