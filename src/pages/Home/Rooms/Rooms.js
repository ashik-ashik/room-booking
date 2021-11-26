import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({room}) => {
    // {_id, name, Prices, img, Amenities, BedType, Size, description, Categories, Adults}
    const {_id, name, Prices, img, description, Adults, Size} = room;
    return (
        <Col>
            <div className='service-img mb-3'>
                <img src={img} alt='' />
            </div>
            <h5>{name}</h5>
            <div className="d-flex align-items-center my-2">
            <h4 className='text-danger fw-bold'>${Prices}</h4>
            <span className="small text-monospace ms-2"> for 3 nights (+taxes and fees)</span>
            </div>
            <div className="d-flex align-items-center justify-content-around border-top border-bottom my-2 py-2">
                <h5><i className="bx bxs-user me-1"></i>{Adults}</h5>
                <h5><i className='bx bx-move me-1' ></i>{Size}</h5>
            </div>
            <p>{description.substring(0, 100)}</p>
            <Link to={`/roomdetails/${_id}`}><Button variant='success' className='rounded-0 px-4'>Book Now</Button></Link>
        </Col>
    );
};

export default Service;