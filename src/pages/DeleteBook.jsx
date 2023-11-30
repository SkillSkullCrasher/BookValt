import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import { Spinner } from '../components/spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {  useSnackbar } from 'notistack'
// useParams
// useState useEffect BackButton Spinner axios 
export const DeleteBook = () => {
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const { id } = useParams();
  const mod= id.slice(1); 
  const {enqueueSnackbar} =useSnackbar();
  const handleDeleteBook=()=>{
    setLoading(true);
    axios.delete(`http://localhost:5555/library/${mod}`)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar('Book deleted Successfully' ,{variant:'success'})
    
      navigate('/library');
    }).catch((err)=>
    {
      console.log(err);
      enqueueSnackbar('Error' ,{variant:'error'})
      // alert('An error happened. please check console')
      setLoading(false)
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {
        loading?<Spinner />:''
      }
      <div className="flex flex-col items-center border-2 border-white rounded-xl w-[600px] p-8 mx-auto" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
        <div className="text-2xl text-white justify-center">Are You Sure, You want to delete this book!</div>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}
