import React, { useEffect } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth/useAuth';

const Register = () => {
    const {googleLogIn,  register, handelName, handelEmail, handelPassword, updateUserName} = useAuth();

    const location = useLocation();

    const history = useHistory();
        const handelGoogleLogIn = () => {
            googleLogIn()
            .then(() => {
                console.log(location?.state?.from?.pathname)
                history.push(location?.state?.from?.pathname || '/home');
            })
        };
    const handelRegister = (e) => {
        e.preventDefault();
        register()
        .then((userCredential) => {
            updateUserName();
            history.push(location?.state?.from?.pathname || '/home');
        })
    };

    // set title
    useEffect(()=>{
        document.title = "Register Book a Room in a Vacation";
    }, [])
    
    return (
        <section className='py-5 ragister-page'>
            <Container>
                <Row>
                    <Col></Col>
                    <Col md='5' className="bg-white">
                        <div className='px-3 py-4 '>
                            <h4 className="text-primary fw-bold">Register</h4>
                            <Form className='mt-4' onSubmit={handelRegister}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control onBlur={handelName} type="text" placeholder="Full name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handelPassword} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" className='rounded-0' />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='px-4 text-uppercase rounded-0'>
                                    Register
                                </Button>
                            </Form>
                            <div className='my-4'>
                                <Button variant='outline-dark' onClick={handelGoogleLogIn}>
                                <img src="https://i.ibb.co/R2kXPqn/google-logo.png" alt="" style={{height: "30px"}} className='me-2' />
                                    Regsiter with Google</Button>
                            </div>
                            <div>
                                <p className='fw-bold'>Are you already Member? <Link to='/login'>LogIn</Link> </p>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;