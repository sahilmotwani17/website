import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap'; // Import React Bootstrap components
import NavigationBar from './Navbar';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

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
      // Send the form data to the backend server
      const response = await axios.post('http://127.0.0.1:8000/api/contact', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.data); // Server response number

      // Clear input fields after successful submission
      setFormData({
        name: '',
        email: '',
        number: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error scenarios, such as displaying an error message to the user.
    }
  };

  return (
    <div id="contact" style={{ height: 350 }}>
      <h1>Contact</h1>
      <NavigationBar />
      <Form onSubmit={handleSubmit} style={{ margin: 20 }}>
        <Row>
          <Col md={3}>
            <Form.Group controlId="formName">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="custom-form-group"
              />
            </Form.Group>

            <Form.Group controlId="formNumber">
              <Form.Label>Contact number</Form.Label>
              <Form.Control
                as="textarea"
                name="number"
                value={formData.number}
                onChange={handleChange}
                rows={1}
                required
                className="custom-form-group"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="custom-form-group"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
