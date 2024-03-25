import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
      const data = await response.json();
      setBookDetails(data);
    };

    fetchBookDetails();
  }, [bookId]);

  if (!bookDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{bookDetails.title}</h2>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetail;
