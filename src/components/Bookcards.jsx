import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getBooks, BASE_URL } from '../services/api';

const Bookcards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {books.map((book) => (
        <a href={book.link} key={book.id} className="transition-transform hover:scale-105 duration-300">
          <div className="h-[400px] overflow-hidden bg-amber-800/10 flex flex-col items-center justify-center
           p-3 rounded-lg shadow-md gap-3 py-20">
            <img
              src={`${BASE_URL}${book.b_img}`}
              alt={book.bname}
              width={100}
              height={100}
              className="rounded-md object-cover w-[300px] min-h-[300px]"
            />
            <span className="text-amber-800 font-semibold text-lg lg:text-sm text-center">{book.bname}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Bookcards;
