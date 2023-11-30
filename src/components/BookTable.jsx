import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Spinner} from '../components/spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import { BookTable } from '../components/BookTable';
import { BookCard } from '../components/BookCard';




// bookca
// Spinner
export const BookTable = ({books}) => {
  return (
    <table className="w-full border-separate border-spacing-2" >
    <thead>
      <tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <th className="border border-slate-600 rounded-md text-yellow-200" >No</th>
        <th className="border border-slate-600 rounded-md text-yellow-200">Title</th>
        <th className="border border-slate-600 rounded-md max-md:hidden text-yellow-200">Author</th>
        <th className="border border-slate-600 rounded-md max-md:hidden text-yellow-200">PublishYr</th>
        <th className="border border-slate-600 rounded-md text-yellow-200">Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={book._id} className="h-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <td className="border border-state-700 rounded-md text-center text-red-100">{index + 1}</td>
          <td className="border border-state-700 rounded-md text-center text-red-100">{book.title}</td>
          <td className="border border-state-700 rounded-md text-center text-red-100">{book.author}</td>
          <td className="border border-state-700 rounded-md text-center text-red-100">{book.publishYear}</td>
          <td className="border border-state-700 rounded-md text-center">
            <div className="flex justify-center gap-x-4">
              <Link to={`/library/details/:${book._id}`}>
                <BsInfoCircle className="text-2xl text-green-900 hover:text-white" />
              </Link>
              <Link to={`/library/edit/:${book._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-white" />
              </Link>
              <Link to={`/library/delete/:${book._id}`}>
                <MdOutlineDelete className="text-2xl text-red-600 hover:text-white" />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
