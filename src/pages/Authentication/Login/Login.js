import React, { useEffect, useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth/useAuth';

const Login = () => {
    const {googleLogIn, handelLogIn, setEmail, setPassword} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const emailRef = useRef();
    const passRef = useRef();

        const handelGoogleLogIn = () => {
            googleLogIn()
            .then(() => {
                history.push(location?.state?.from?.pathname || '/home');
            })
        }
        const emailUserLogin = (e) => {
            e.preventDefault();
            const userEmail = emailRef.current.value;
            const userPass = passRef.current.value;
            setEmail(userEmail);
            setPassword(userPass);
                handelLogIn()
                .then((userCredential) => {
                    history.push(location?.state?.from?.pathname || '/home');
                })
        };
        // set title
        useEffect(()=>{
            document.title = "LogIn to Book a Room in a Vacation";
        }, [])

    return (
        <section className='py-5 login-page'>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col md='5' className='bg-white'>
                        <div className='py-4 px-3'>
                            <h4 className="text-primary fw-bold">LogIn</h4>
                            <Form onSubmit={emailUserLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remenber me" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Log In
                                </Button>
                                </Form>
                            <div className='my-4'>
                                <Button variant='outline-dark' onClick={handelGoogleLogIn}>
                                    <img src="https://i.ibb.co/R2kXPqn/google-logo.png" alt="" style={{height: "30px"}} className='me-2' />
                                    Login with Google</Button>
                            </div>
                            <p className='fw-bold'>I have no account?? <Link to="/register">Register</Link> </p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Login;