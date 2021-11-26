import React from 'react';
import {  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBook = ({book, index, bookInfo, handelDelete, handelStatus}) => {
  // console.log(book, index, bookInfo)
  try{
    var currentBook = bookInfo[index] || {};
  }catch(err){
    console.log(err.message)
  }finally{
    var currentBook = {};
  }
  // console.log(bookInfo)
  return (
    <>


      <tr>
        <td><img src={book?.img} style={{width: '60px'}} alt="" /></td>
        <td className="text-nowrap"><h6>{book?.name}</h6></td>
        <td className="text-nowrap"><h6>{currentBook?.name}</h6></td>
        <td className="text-nowrap">{currentBook?.email}</td>
        <td className="text-nowrap">
          <span className="text-warning fw-bold">{currentBook?.status}</span>
            {
              currentBook?.status?.toLowerCase() === "pending" && <Button variant='primary' onClick={()=>handelStatus(currentBook?._id)} className='small rounded-0 ms-2'>Approve</Button>
            }
          </td>
        <td className="text-nowrap">
          <Link to={`update/booking/${currentBook?._id}`}><Button variant="success"  className='rounded-0 small'>Update</Button></Link>
          <Button variant="danger" onClick={()=> handelDelete(currentBook?._id)} className='rounded-0 small ms-2'>Delete</Button>
        </td>
        
      </tr>

      
    </>
  );
};

export default SingleBook;