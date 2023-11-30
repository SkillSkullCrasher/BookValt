import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
// BsArrowL
 const BackButton=({destination='/library'})=>{
    return (
        <div className='flex'> 
            <Link to={destination} className='bg-white text-black px-4 py-1 rounded-lg w-fit'>Back
            {/* <BsArrowLeft className="text-2xl"></BsArrowLeft> */}
           </Link>

        </div>
    )
}
export default BackButton;
// export const BackButton = () => {
//   return (
//     <div>BackButton</div>
//   )
// }
