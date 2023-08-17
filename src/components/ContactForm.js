import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import NavigationBar from './Navbar';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  const [showForm, setShowForm] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contact', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.data);

      setFormData({
        name: '',
        email: '',
        number: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleJoinTeamClick = () => {
    setShowForm(false);
    setShowMessage(true);
  };

  const handleConnectClick = () => {
    setShowMessage(false);
    setShowForm(true);
  };

  return (
    <div id="contact" style={{ height: '39.86vw' }}>
      <h1>Contact</h1>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'center',fontFamily:'Proxima Nova' ,width: '28.48vw', height: '2.9vw', marginTop: '2.3vw',marginLeft:'2vw' ,borderRadius: '0.72vw', border: '0.07vw solid rgba(255, 203, 111, 1)' }}>
        <Button variant="primary" onClick={handleJoinTeamClick} style={{ backgroundColor: showMessage ? 'rgba(255, 203, 111, 1)' : 'transparent', color: showMessage ? 'white' : 'black', border: 'none', outline: 'none',fontSize:'1.3vw',marginRight: '2vw',paddingTop: '0.5vw', paddingBottom: '0.5vw'  }}>
          Join Our Team
        </Button>
        <Button variant="success" onClick={handleConnectClick} style={{ backgroundColor: showForm ? 'rgba(255, 203, 111, 1)' : 'transparent', color: showForm ? 'white' : 'black', border: 'none', outline: 'none',fontSize:'1.3vw',paddingTop: '0.5vw', paddingBottom: '0.5vw'  }}>
          Connect With Us
        </Button>
      </div>
      
      {showForm && (
        <Form onSubmit={handleSubmit} style={{marginTop:'1.45vw'}} >
          <span style={{fontFamily:'Proxima Nova', fontSize:'1.3vw'}}>Give us your details in case you have any queries and we will contact you at the earliest. Let’s talk.</span>
          <br/>
          <span style={{fontFamily:'Proxima Nova', fontSize:'1.01vw', color:'rgba(158, 158, 158, 1)'}}>Mandatory fields are marked with *</span>
          <Row>
            <Col md={3}>
              <Form.Group controlId="formName" style={{ marginTop: '2.5vw' }} >
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="custom-form-group transparent-input"
                />
              </Form.Group>

              <Form.Group controlId="formNumber">
                <Form.Label>Contact number</Form.Label>
                <Form.Control
                  variant="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  rows={1}
                  required
                  className="custom-form-group transparent-input"
                  style={{ height: '2.75vw' }}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formEmail" style={{ marginTop: '2.5vw' }}>
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="custom-form-group transparent-input"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button id="contactsubmit" variant="outline-warning" type="submit" style={{ marginTop: '0.72vw' }}>
            Submit
          </Button>
        </Form>
      )}
      {showMessage && (
        <p>We are not hiring at the moment.</p>
      )}
    </div>
  );
};

export default ContactForm;
