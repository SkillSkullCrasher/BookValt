import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import { Spinner } from '../components/spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {  useSnackbar } from 'notistack'

export const UpdateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const mod= id.slice(1); 
  const {enqueueSnackbar} =useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/library/${mod}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      
        // alert('An error occurred. Please check the console.');
        console.log(err);
      });
  }, [id]);

  const handleEdit = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/library/${mod}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book updated Successfully' ,{variant:'success'})
    
        navigate('/library');
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('Error' ,{variant:'error'})
        // alert('An error occurred. Please check the console.');
        console.log(err);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Update Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-gray-200 rounded-xl w-[600px] p-4 mx-auto "style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div className='my-4'>
          {/* <label htmlFor='' className='text-xl mr-4  text-gray-500'>
            Title
          </label> */}
          <label htmlFor="" className='text-xl mr-4  text-white'>Title</label>
          
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-2 py-2 w-full text-yellow-400'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            //   <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='border-2 border-gray-500 px-2 py-2 w-full text-yellow-400' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
        
            // className='border-2 border-gray-500 px-2 py-2 w-full text-yellow-400' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
          />
        </div>
        <div className='my-4'>
        <label htmlFor="" className='text-xl mr-4  text-gray-500 text-white'>Author</label>
         
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-2 py-2 w-full text-yellow-400'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            
          />
        </div>
        <div className='my-4'>
        <label htmlFor="" className='text-xl mr-4  text-gray-500 text-white'>PublishYear</label>
          
          <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-2 py-2 w-full text-yellow-400'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
          />
        </div>
        <button className="p-2 bg-yellow-500 m-8 hover:bg-yellow-700" onClick={handleEdit}>
          Update
        </button>
      </div>
    </div>
  );
};
