import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
    const { key, title, author_name, first_publish_year, cover_i, isbn } = book;
    const coverUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : 'https://via.placeholder.com/150'

    const amazonSearchUrl = isbn && isbn.length > 0 ? `https://www.amazon.com/s?k=${isbn[0]}` : null;
    
    
    return (
        <div>
            <img src={coverUrl} alt={title} style={{width: '100px', height: '150px'}}/>
            <h3><Link to={`/book/${key.replace('works/', '')}`}>{title}</Link></h3> 
            <p>Author: {author_name?.[0]}</p>
            <p>First published in: {first_publish_year}</p>
            {amazonSearchUrl && (
                <button onClick={() => window.open(amazonSearchUrl, "_blank")}>Se på Amazon</button>
            )}
        </div>
    );
};
