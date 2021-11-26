import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rooms from "../Home/Rooms/Rooms"

const Services = () => {
    useEffect(()=>{
        document.title = "Our Services";
    }, []);
    const [rooms, setRooms] = useState(null);
    
    useEffect(()=>{
        fetch("https://hidden-retreat-15347.herokuapp.com/rooms")
        .then(res => res.json())
        .then(data => {
            setRooms(data);
        })
    }, []);

    

    return (
        <>
        <Container className="mt-3">
            <div className="py-4 text-white px-lg-4 bg-danger">
            <h3>You can add a new service</h3>
            <h6><Link to='/addnew' className="text-dark fw-bold me-2">Click HERE</Link> to add a new service as your want.</h6>
            </div>
        </Container>       
        <section className="py-5">
                <Container>
                    <Row xs="1" md="2" lg='3' className="g-4">
                    {
                        rooms?.map(room => <Rooms key={room._id} room={room} />)
                    }
                    </Row>
                </Container>
            
            </section>
        </>
    );
};

export default Services;