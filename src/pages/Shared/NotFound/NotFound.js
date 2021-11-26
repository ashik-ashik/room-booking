import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <section id='page-not-found' style={{background: "#000"}}>
            <Container className=''>
                
                <div className='py-5 not-found d-flex flex-column align-items-center justify-content-center'>
                    <div className="mb-3">
                        <span className="display-1 fw-normal text-white">4</span>
                        <span className="display-1 ms-2 fw-normal text-white"><i className='bx bx-sad'></i></span>
                        <span className="display-1 ms-2 fw-normal text-white">4</span>
                    </div>
                    <h3 className="text-white mb-4">OPPs!!! The Page is not found!!!</h3>
                    <Link to='/'>
                        <Button variant='danger' className="rounded-0 fw-bold px-4">Go Home</Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default NotFound;