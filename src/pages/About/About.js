import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(()=>{
        document.title = "About Us";
    }, []);
    return (
        <>
            <section className='py-5 bg-dark text-white'>
                <Container>
                    <h2 className='display-4 fw-bold'>About</h2>
                    <p className='fw-bold'><Link to='/home' className='text-decoration-none'>Home</Link> / <span >About</span></p>
                </Container>
            </section>

            <section className='py-5'>
                <Container>
                    <h2 className='text-center'>About Us</h2>
                    <Row className='g-4 mt-4 justify-content-center'>
                        <Col xs="1" md="9" lg='7'> 
                            <img src="https://i.ibb.co/b7tQ83g/about-1-891x594.jpg" className='img-fluid' alt="" />
                            <p className="mt-4">
                            Our resort is located in the top-rated area in Punta Cana in Los Corales which comes with different hotel rooms and individual serviced apartments. Only 5 minutes walking from the beach will get you to the center where you can find all attractions and useful things such as restaurants, supermarkets, pharmacy, currency exchange and many more!
                            At our coastal wellness and spa resort we care about each piece of your stay – dining, activities – and only the best rooms. We have lots of propositions for introverts and extroverts as well!
                            </p>
                            <p>Our apartments include basic services like periodic cleaning and change of linen and towels, so as per request like daily full cleaning. Occasionally we offer some special units like cabins on the beach front, suites and studios.</p>

                            <h2 className="my-4">Amazing Outdoor for Your Pictures</h2>
                            <Row xs='1' md='3' className='g-2'>
                                <Col>
                                    <img src="https://i.ibb.co/Bwd5BhC/gallery-1.jpg" alt="" className="img-fluid" />
                                </Col>
                                <Col>
                                    <img src="https://i.ibb.co/nD8Vhxt/gallery-5.jpg" alt="" className="img-fluid" />
                                </Col>
                                <Col>
                                    <img src="https://i.ibb.co/80dpqFg/gallery-4.jpg" alt="" className="img-fluid" />
                                </Col>
                                <Col>
                                    <img src="https://i.ibb.co/vwQsHpP/gallery-3.jpg" alt="" className="img-fluid" />
                                </Col>
                                <Col>
                                    <img src="https://i.ibb.co/FW4n5vf/gallery-2.jpg" alt="" className="img-fluid" />
                                </Col>
                                <Col>
                                    <img src="https://i.ibb.co/FzQ3sNF/gallery-6.jpg" alt="" className="img-fluid" />
                                </Col>
                            </Row>
                            <p className="mt-4">
                                Wonderful vacation Restaunent is one of the most historically significant areas in Punta Cana, and in ancient times, it was one of the most sacred places on the island. Be sure you’ll have fun with the best excursions, crazy stories and activities here!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </>
    );
};

export default About;