import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase/useFirebase';
import SingleBook from './SingleBook';
// import { useHistory, } from 'react-router';

const Booking = () => {
  const {isLoading} = useFirebase();
  

  const [booking, setBooking] = useState(null);
  const [myBooking, setMyBooking] = useState(null);
  useEffect(()=>{
    document.title = "Book a Roome";
  }, []);
  

  // const history = useHistory();
  useEffect(()=> {
    fetch("https://hidden-retreat-15347.herokuapp.com/booking")
    .then(res => res.json())
    .then(data => {
      setBooking(data);
    });
  }, []);

  useEffect(()=> {
      fetch(`https://hidden-retreat-15347.herokuapp.com/manage-booking/`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setMyBooking(data);
    })
  }, [myBooking]);

  // delete operation
    const handelDelete = id => {
      const asure = window.confirm("Do you want to Cencle the BOOKING???");
      if(asure){
        axios.delete(`https://hidden-retreat-15347.herokuapp.com/manage/${id}`)
        .then(res => {
          if(res.data?.deletedCount === 1){
            const restBooking = myBooking.filter(booking => booking?._id !== id);
            window.alert("Delete Successfully");
            setMyBooking(restBooking);
          }
        })
      }
    };


  // update booking status
  const handelStatus = id => {
    axios.put (`https://hidden-retreat-15347.herokuapp.com/status/${id}`, {status : "Approved"})
    .then(res =>  {
      // console.log(res);
    })
  }

  // console.log(user?.email)
  if(isLoading){
    return (
      <h2>Loading....</h2>
    )
  }



  return (
    <>
    <Container className="py-5">
      
      <h3 className='fw-bold text-success mb-4'>Manage All Booking:</h3>

      {
        !myBooking?.length ? <Alert variant='danger'>
        No Rooms have been booked  yet. Go back to 
        <Alert.Link as={Link} to="/services"> Our Services</Alert.Link> then book a room.
      </Alert> : <Table responsive="md">
        <thead>
          <tr className="text-nowrap">
            <th>Photo</th>
            <th>Service Name</th>
            <th>Guest Name</th>
            <th>Guest Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          myBooking?.map((book, index)=> <SingleBook 
          key={book._id} book={book} index={index} 
          bookInfo={booking} handelDelete={handelDelete}
          handelStatus={handelStatus} />)
        }
        </tbody>
      </Table>
      }
      

    </Container>
    </>
  );
};

export default Booking;