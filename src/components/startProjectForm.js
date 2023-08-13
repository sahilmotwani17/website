import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'; // Import React Bootstrap components
import NavigationBar from './Navbar';
import ContactForm from './ContactForm';

const StartProject = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email:  '',
    number: '',
    company: '',
    designation: '',
    services: '',
    idea: ''
  });

  const handleChange = (e) => {
    const { name, value } =  e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend server
      const response = await axios.post('http://127.0.0.1:8000/api/startProject', formData, { headers: { "Content-Type": "application/json" } });

      // console.log(formData);
      console.log(response.data); // Server response number
      
      setFormData({
        fullName: '',
        email: '',
        number: '',
        company: '',
        designation: '',
        services: '',
        idea: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error scenarios, such as displaying an error message to the user.
    }
  };

  return (
    <div>
      <NavigationBar />
      <div style={{margin:130}}>
        <Row className='gx-4'>
          {/* Form Column */}
          <Col md={5}>
            <h3 style={{ color: "rgba(225, 165, 100, 1)", fontWeight: 'bold', fontFamily:"Canela Deck", fontSize:"2.61vw" }}>Start a project with us</h3>
            <span style={{fontFamily:"Proxima Nova", fontSize:"1.3vw", lineHeight:"1.89vw"}}>You can share your ideas with us, and we will get back to you at the earliest. <br/>Your details will be kept private.
            <br /></span>
            <p style={{fontSize:"1.01vw",fontFamily:"Proxima Nova", color:"rgba(158, 158, 158, 1)"}}>Mandatory fields are marked with *</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="fullName" >
                <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}}>Full name*</Form.Label >
                <Form.Control  className="custom-form-group" type="text"  rows={1}  name="fullName"  value={formData.fullName} onChange={handleChange } required />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}}>E-mail*</Form.Label>
                <Form.Control className="custom-form-group" type="email" rows={1}  name="email"  value={formData.email} onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="number">
                <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}}>Contact number </Form.Label>
                <Form.Control className="custom-form-group" as="textarea" name="number" rows={1} value={formData.number} onChange={handleChange}  />
              </Form.Group>
              <Form.Group controlId="company">
                <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}}>Company*</Form.Label>
                <Form.Control className="custom-form-group" as="textarea" name="company" rows={1} value={formData.company} onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="designation">
                <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}}>Designation*</Form.Label>
                <Form.Control className="custom-form-group" as="textarea" name="designation" rows={1} value={formData.designation} onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="services">
                <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}}>Services*</Form.Label>
                <Form.Control className="custom-form-group" as="textarea" name="services" rows={1} value={formData.services} onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="idea">
                <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}}>Idea*</Form.Label>
                <Form.Control className="custom-form-group" as="textarea" rows={6}  name="idea"  value={formData.idea} onChange={handleChange} required />
              </Form.Group>
              <Button id='projectsubmit'style={{marginTop:5}} variant='outline-warning' type="submit">  Submit</Button>
            </Form>
            <h3 style={{fontFamily:"Proxima Bol", fontSize:"1.74vw", color:"rgba(225, 165, 100, 1)", marginTop:"4vw"}}>Why work with us?</h3>
            <p style={{fontFamily:"Proxima Nova", fontSize:"1.3vw",lineHeight:"1.59vw", marginTop:"1.5vw"}}>
            At thru, our approach to design is more intangible than tactile as we zoom out to look at the holistic image of your environment to assess it through the lens of various stakeholders involved, to ensure we offer you emotional health along with a functional reality.
            <br/> <br/>

Thru designs offers an inclusive platform that puts forward a wealth of knowledge and insights with a fresh perspective that challenges the status quo to not only deliver solutions but also focus on innovating new experiences for you and your businesses. Thru ensures the satisfaction of each client by offering a playful and functional approach to design.
            </p>
          </Col>
          {/* Paragraphs Column */}
          
            
          <Col md={7}  >
            <div className='d-flex flex-column align-items-start'>
              <h5 style={{margin:50, color: "rgba(225, 165, 100, 1)", fontFamily:"Proxima Bol", fontSize:"1.74vw"}}>What our clients have to say about us...</h5>
              <div style={{marginLeft:70}}>
                <p className='mb-1' style={{fontFamily:"Proxima Nova", fontSize:"1.3vw", color:"black", fontWeight:"bold"}}>Abhijeet Joshi</p>
                <p className='mb-1 text-muted' style={{fontFamily:"Proxima Nova", fontSize:"1.01vw", color:"rgba(158, 158, 158, 1)"}}>Designation, Company</p>
                <p className='mb-2' style={{fontFamily:"Proxima Nova", fontSize:"1.3vw",lineHeight:"1.59vw"}}>
                  We go an extra mile to understand our stakeholders’ behaviours, activities, and motivations to ensure that our designs connect with them functionally as well as emotionally.
                </p>
                <hr />
              </div>
              <div style={{marginLeft:70}}>
                <p className='mb-1'style={{fontFamily:"Proxima Nova", fontSize:"1.3vw", color:"black", fontWeight:"bold"}}>Abhijeet Joshi</p>
                <p className='mb-1 text-muted' style={{fontFamily:"Proxima Nova", fontSize:"1.01vw", color:"rgba(158, 158, 158, 1)"}}>Designation, Company</p>
                <p className='mb-2'style={{fontFamily:"Proxima Nova", fontSize:"1.3vw",lineHeight:"1.59vw"}}>
                  We go an extra mile to understand our stakeholders’ behaviours, activities, and motivations to ensure that our designs connect with them functionally as well as emotionally.
                </p>
                <hr />
              </div>
              <div style={{marginLeft:70}}>
                <p className='mb-1'style={{fontFamily:"Proxima Nova", fontSize:"1.3vw", color:"black", fontWeight:"bold"}}>Abhijeet Joshi</p>
                <p className='mb-1 text-muted' style={{fontFamily:"Proxima Nova", fontSize:"1.01vw", color:"rgba(158, 158, 158, 1)"}}>Designation, Company</p>
                <p className='mb-2'style={{fontFamily:"Proxima Nova", fontSize:"1.3vw",lineHeight:"1.59vw"}}>
                  We go an extra mile to understand our stakeholders’ behaviours, activities, and motivations to ensure that our designs connect with them functionally as well as emotionally.
                </p>
              </div>
            </div>
          </Col>
         
        </Row>
      </div>
      <ContactForm/>

    </div>
  );
};

export default StartProject;
