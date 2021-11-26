import React, { useEffect, useState } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rooms from '../Rooms/Rooms';

const Home = () => {
    useEffect(()=>{
        document.title = "Book a Room in a Vacation";
    }, []);
    const [rooms, setRooms] = useState(null);
    
    useEffect(()=>{
        fetch("https://hidden-retreat-15347.herokuapp.com/rooms")
        .then(res => res.json())
        .then(data => {
            setRooms(data)
        })
    }, [])
    return (
        <>

            <section className="py-5 home-hero">
                <Container fluid className="d-flex align-items-center justify-content-center h-100">                    
                    <div className="text-white text-center">
                        <h3 className='display-5 fw-normal'>Welcome to Wonderfull Resturant</h3>
                        <h5 className="mb-5">To spand your best VACATION This will be your best choice!</h5>
                        <Link to="/services"><Button variant="success" className="rounded-0 px-4 py-2 fw-bold">Book Now</Button></Link>
                    </div>
                </Container>
            </section>

            {/* discount offer */}
            <section className="py-3 bg-light">
                <Container fluid>
                    <Row xs='1' md='2' className='g-3'>
                        <Col>
                            <div className="banner text-white py-5 px-3">
                                <h2>Get</h2>
                                <h2 className="display-1 fw-bold">20%</h2>
                                <h3 className="display-5 fw-normal">Discount</h3>
                                <h3 className='mb-4'>This Offer Remaining Only 1 Day</h3>
                                <Link to='/roomdetails/617d1120480e0019754b6c97'><Button variant="success" className="px-4 fw-bold py-2 rounded-0">Book Now</Button></Link>
                            </div>
                        </Col>
                        <Col>
                            <div className="banner2 text-white py-5 px-3">
                                <h2>Get</h2>
                                <h2 className="display-1 fw-bold">15%</h2>
                                <h3 className="display-5 fw-normal">Discount</h3>
                                <h3 className='mb-4'>This Offer Remaining Only 2 Day</h3>
                                <Link to='/roomdetails/617d1120480e0019754b6c95'><Button variant="success" className="px-4 fw-bold py-2 rounded-0">Book Now</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-4">
                <Container>
                    <Row xs="1" md="2" lg='3' className="g-4">
                    {
                        rooms?.map(room => <Rooms key={room._id} room={room} />)
                    }
                    </Row>
                </Container>
            
            </section>

            <section className="py-5">
                <Container>
                    <h2 className="text-center fw-bold">What Our Guests Say</h2>
                    <Row xs="1" md='2' className='mt-5'>
                        <Col>
                            <div className="shadow-lg p-4">
                            <span className="d-inline-block p-2 text-white bg-success display-6 mb-4">
                            <i class='bx bxs-quote-left'></i>
                            </span>
                                <p>
                                We had a wonderful stay at villa the Wonderfull Resturant. The house is beautiful and the pool is amazing. We had multiple meals cooked and prepared and every single one was the best we ever had.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="shadow-lg p-4">
                            <span className="d-inline-block p-2 text-white bg-success display-6 mb-4">
                            <i class='bx bxs-quote-left'></i>
                            </span>
                                <p>
                                We had a wonderful stay at villa Ciestra. The house is beautiful and the pool is amazing. We had multiple meals cooked and prepared and every single one was the best we ever had.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;