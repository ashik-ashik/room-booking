import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DisplayService = ({service}) => {
    const {id, title, price, describe, describe2, img} = service;
    let isOdd = false;
    if(id % 2) {
        isOdd = true;
    };
    return (
        <Row className='py-4'>
            <Col xs={{ order: `md-${isOdd ? 'first' : "last"}` }} className={ `${isOdd && 'text-end'} mb-md-0 mb-4`}>
                <img src={img} alt='' />
            </Col>
            <Col xs='12' md='7' className={ `md-${!isOdd && 'text-end'}`}>
                <h3>{title}</h3>
                <h3 className='fw-bold text-danger'>${price}</h3>
                <p className='my-4'>{describe}</p>
                <p className='mb-4'>{describe2}</p>
                <Link to={`/servicesDetail/${id}`}><Button variant='outline-primary' className='rounded-0 px-4'>Read More</Button></Link>
            </Col>
        </Row>
    );
};
export default DisplayService;