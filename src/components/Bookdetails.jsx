import React, { useEffect, useState } from 'react'
import { getBookById, BASE_URL } from '../services/api'
import { useParams } from 'react-router-dom'

const Bookdetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(data => setBook(data));
  }, [id]);

  // Show loading until book data is fetched
  if (!book) return <div className="text-center text-lg mt-10">Loading book details...</div>;

  return (
    <section 
      className="pt-15 lg:pt-20 justify-center flex"
      id="#home">
      <div className="container flex items-center justify-center
        lg:gap-15 mt-10 p-5 md:p-0">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
          <img
            src={`${BASE_URL}${book.b_img}`}
            alt={book.bname}
            className="rounded-md mb-4 h-[600px] object-cover"
          />
          <h2 className="text-3xl font-bold text-amber-800 mb-4">{book.bname}</h2>
          <p className="text-gray-700">{book.description || 'No description available.'}</p>
        </div>
      </div>
    </section>
  );
}

export default Bookdetails;
