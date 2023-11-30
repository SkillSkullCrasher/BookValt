import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
// import { spinner } from '../components/spinner';
import { Spinner } from '../components/spinner';
// Spinner

export const DisplayBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const mod= id.slice(1); 
  console.log(id);
  // console.log( `http://localhost:5555/library/${id}`);

  useEffect(() => {
    setLoading(true);
    axios
      .get(   `http://localhost:5555/library/${mod}`)
      .then((res) => {
        setBook(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        console.log("hello");
        
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 '>
      <BackButton />

      <h1 className="text-3xl my-4 text-yellow-400 mt-12 mb-8">Book Information</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-white rounded-xl w-fit p-4  " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="my-4">
            <span className="text-xl mr-4 text-white  ">Id : </span>
            <span style={{ color: 'orange' }}>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-white">Title : </span>
            <span style={{ color: 'orange' }}>{book.title}</span> {/* Title with white color */}
       </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-white">Author : </span>
            <span style={{ color: 'orange' }}>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-white">Publish Year : </span>
            <span style={{ color: 'orange' }}>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-white">Create Time : </span>
            <span style={{ color: 'orange' }}>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-white">Last Updated Time :  </span>
            <span style={{ color: 'orange' }}>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayBook;