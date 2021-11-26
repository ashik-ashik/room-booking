import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';

const UpdateBooking = () => {
  const {id} = useParams();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const [booking, setBooking] = useState(null);
  useEffect(()=>{
    fetch(`https://hidden-retreat-15347.herokuapp.com/update/${id}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setBooking(data);
  })
  }, []);


  const onSubmit = (data) => {
    console.log(data);
    axios.put(`https://hidden-retreat-15347.herokuapp.com/booking/${id}`, data)
    .then( res => {
        window.alert("Booking updated successfully");
        history.push("/manage-booking")
    })
  }

  return (
    <>
      <section className="py-5">
        <Container>
          <div className="mt-5 border p-3">
              <h2 className="text-primary mb-3">Update Your Booking Information</h2>
              <h6 className="mb-5">Your Booking Id : <span className="text-danger">{booking?._id}</span></h6>


              <Form onSubmit={handleSubmit(onSubmit)}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Guest Name</Form.Label>
                  <Form.Control defaultValue={booking?.name} type="text" {...register("name" )} placeholder="Enter Guest Name" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control defaultValue={booking?.email} type="email" {...register("email" )} placeholder="Enter Guest Name" />                                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control defaultValue={booking?.phone} type="tel" {...register("phone" )} placeholder="Phone Number" />                             
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Adults</Form.Label>
                  <Form.Control defaultValue={booking?.Adults} type="number" {...register("Adults" )} className="number-type" placeholder="Adults" />                             
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>How many guest?</Form.Label>
                  <Form.Control defaultValue={booking?.guest} type="number" {...register("guest" )} className="number-type" placeholder="How Many members" />                             
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Days??</Form.Label>
                  <Form.Control defaultValue={booking?.days} type="number" {...register("days" )} className="number-type" placeholder="How Many Days" />                             
              </Form.Group>
              
              <Button variant="primary" className="px-4 shadow-none rounded-0" type="submit">Update Now</Button>
              </Form>

          </div>
        </Container>
      </section>
    </>
  );
};

export default UpdateBooking;