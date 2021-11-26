import React, { useEffect } from 'react';
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router';

const AddNewService = () => {
  const history = useHistory();
  useEffect(()=>{
    document.title = "Add a New Service";
}, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    data.id = Math.ceil((Math.random() * 1000) + (Math.random()*9))
    axios.post("https://hidden-retreat-15347.herokuapp.com/addnew", data)
    .then( res => {
      if(res?.data?.insertedId) {
        window.alert("Service added successfully");
        reset();
        history.push("/services");
      }
    })

  };
  return (
    <>

    <section className="py-4 bg-light">
      <Container>
        <div className="p-3 border">
          <h2 className="my-4 fw-bolder">Add a New Service:</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Service name<span className="text-danger">*</span></Form.Label>
            <Form.Control {...register("name", { required: true })} type="text" placeholder="Enter Service Name" />
          </Form.Group>

          <FloatingLabel controlId="floatingTextarea2" label="Service description *">
            <Form.Control {...register("description", { required: true })} 
              as="textarea"
              placeholder="Service description here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>

          <Form.Group className="my-3" controlId="description">
            <Form.Label>Adults <span className="text-danger">*</span></Form.Label>
            <Form.Control {...register("Adults", { required: true })} type="text" placeholder="Enter Adults" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Amenities <span className="text-danger">*</span></Form.Label>
            <Form.Control {...register("Amenities", { required: true })} type="text" placeholder="Enter Amenities" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>BedType <span className="text-danger">*</span></Form.Label>
            <Form.Control {...register("BedType", { required: true })} type="text" placeholder="Enter BedType" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Room Size <span className="text-danger">*</span></Form.Label>
            <Form.Control {...register("Size", { required: true })} type="text" placeholder="Enter Room Size" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Categories <span className="text-danger">*</span></Form.Label>
            <Form.Control {...register("Categories", { required: true })} type="text" placeholder="Enter Categories" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Service Image <span className="text-danger">*</span></Form.Label>
            <Form.Control {...register("img", { required: true })} type="text" placeholder="Enter image url" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Service Price  <span className="text-danger">*</span></Form.Label>
            <Form.Control {...register("Prices", { required: true })} type="number" className='number-type' placeholder="Enter Price" />
          </Form.Group>

          

          <Button variant="success" className="rounded-0 fw-bold px-4" type="submit">
            Add New Service
          </Button>

        </Form>
        </div>
      </Container>
    </section>
      
    </>
  );
};

export default AddNewService;