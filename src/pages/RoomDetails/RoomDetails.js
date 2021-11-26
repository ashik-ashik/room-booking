import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Table, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase/useFirebase';
import axios from 'axios';


const RoomDetails = () => {
    const {roomId} = useParams();
    const {user} = useFirebase();
    const history = useHistory();
    // const [bookingInfo, setBookingInfo] = useState();
    const [room, setRoom] = useState();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
            data.serviceId = room?.id;
            data.status = "Pending";
        axios.post("https://hidden-retreat-15347.herokuapp.com/booking", data)
        .then( res => {
          if(res?.data?.insertedId) {
            window.alert("Booking Confirm!!!!");
            reset();
            history.push("/manage-booking")
          }
        })
          
      }
    useEffect(()=> {
        
            fetch(`https://hidden-retreat-15347.herokuapp.com/roomdetails/${roomId}`)
            .then(res => res.json())
            .then(data => {
                setRoom(data);
            });
    }, []);
    
    useEffect(()=>{
        
    }, []);
    // console.log(user.displayName)
    
   
    return (
        <>
        <section className='py-5 service-detail'>
            <Container>
               <Row>
                   <Col>                   
                   </Col>

                   <Col xs='12' md='10' lg='8'>   
                        <img src={room?.img} alt="" />
                        <h3 className="mt-4">{room?.name}</h3>
                        <p className="mt-4">
                            {room?.description}
                        </p>
                        <Table responsive="md" className='mt-4'>
                            <thead>
                            </thead>
                            <tbody>
                            <tr>
                                <th>Adults</th>
                                <td>{room?.Adults}</td>
                            </tr>
                            <tr>
                                <th>Amenities</th>
                                <td>{room?.Amenities}</td>
                            </tr>
                            <tr>
                                <th>BedType</th>
                                <td>{room?.BedType}</td>
                            </tr>
                            <tr>
                                <th>Room Size</th>
                                <td>{room?.Size}</td>
                            </tr>
                            <tr>
                                <th>Categories</th>
                                <td>{room?.Categories}</td>
                            </tr>
                            <tr>
                                <th>Price start at</th>
                                <td><span className="fw-bold text-danger">${room?.Prices}</span> for 3 nights (+taxes and fees)</td>
                            </tr>
                            </tbody>
                        </Table>

                        <div className="mt-5 border p-3">
                            <h2 className="text-primary">Book Now</h2>


                            <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Guest Name</Form.Label>
                                <Form.Control defaultValue={user?.displayName} className='fw-bold' type="text" {...register("name", { required: true })} placeholder="Enter Guest Name" />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control defaultValue={user?.email} className='fw-bold' type="text" {...register("email", { required: true })} placeholder="Enter Guest Name" />                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" {...register("phone", { required: true })} placeholder="Phone Number" />                             
                            </Form.Group>
                            
                            <div className="my-4"><span className="me-2">Adults <span className="text-danger">*</span></span>
                                    <Form.Select {...register("Adults")} size="sm">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </Form.Select>
                                </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>How many guest?</Form.Label>
                                <Form.Control type="number" {...register("guest", { required: true })} className="number-type" placeholder="How Many members" />                             
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Days??</Form.Label>
                                <Form.Control type="number" {...register("days", { required: true })} className="number-type" placeholder="How Many Days" />                             
                            </Form.Group>
                            
                            <Button variant="primary" className="px-4 shadow-none rounded-0" type="submit">Book Now</Button>
                            </Form>

                        </div>

                   </Col>

                   <Col>                   
                   </Col>
               </Row>
            </Container>
        </section>
        </>
    );
};

export default RoomDetails;