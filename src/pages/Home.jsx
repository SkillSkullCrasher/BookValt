import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner} from '../components/spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { BookTable } from '../components/BookTable';
import { BookCard } from '../components/BookCard';
import { AiOutlineTable, AiOutlineAppstore } from 'react-icons/ai'; // Import table and card icons
import "../App.css";
import BackButton from '../components/BackButton';
import BackHome from '../components/BackHome';
// BackButton
// Spinner
// BookCard
export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType]= useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/library')
      .then((res) => {
        setBooks(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  // <div className="app-background">
  
  return (
    <div className="p-4 app-background " >
       <BackHome />
      <div className="flex justify-end  gap-x-4 ">
      <button className=' hover:bg-red-900 px-2 py-1 rounded-lg text-2xl'  onClick={()=>setShowType('table')}
          
        ><AiOutlineTable className='text-white text-2xl mr-2' /> {/* Table Icon */}
        
{/* <AiOutlineTable></AiOutlineTable> */}
        </button>
        <button className=' hover:bg-red-800 px-1 py-1 rounded-lg text-2xl' 
        onClick={()=>setShowType('card')}
          
        >          <AiOutlineAppstore className='text-white  mr-2 text-2xl' /> {/* Card Icon */}
        


        </button>
        
      </div> 
       {/* <h1 className="text-4xl my-8 text-yellow-200 ml-100 text-center ">BookValt</h1> */}
      <div className="flex  items-center justify-between  ">
        <h1 className="text-3xl my-8 text-black ml-33 ">   Data</h1>
        <Link to="/library/create">
          <MdOutlineAddBox className="text-sky-100 text-4xl justify-end" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : 
      showType==='table'?
      <BookTable books={books}></BookTable>:
     <BookCard books={books}></BookCard>
      }
    </div>
  );
};