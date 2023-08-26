import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  // Set showForm to true initially
  const [showForm, setShowForm] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

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
<div id='ContactForm' style={{ width: "95.3vw", height: "39.86vw", backgroundColor: "rgba(251, 246, 234, 1)", borderRadius: "0.72vw",marginLeft:"1.8vw" }}>
    <span id="cctextt" style={{ marginTop: "2vw", display: "inline-block" }}>Contact</span>
    <Link style={{ marginLeft: "66vw", marginTop: "-3vw", display: "inline-block" }} id='sstartproject' className="btn btn-outline-warning" to="/startProject">Start a project with us</Link>

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
 <div style={{ fontFamily: 'Proxima Nova', fontSize: '1.3vw' }}>
    <span style={{ display: 'block', marginLeft:"2vw" }}>Give us your details in case you have any queries and we will contact you at the earliest. Let’s talk.</span>
    <span style={{ fontSize: '1.01vw', color: 'rgba(158, 158, 158, 1)', display: 'block',marginLeft:"2vw" }}>Mandatory fields are marked with *</span>
</div>

          <div id='cformm' style={{}}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Form.Group controlId="formName" style={{ marginTop: '2.5vw', flex: 1}}>
      <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}}>Full name</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="custom-form-group transparent-input"
        style={{width:"22.46vw",height:"2.9vw"}}
      />
    </Form.Group>

    <Form.Group controlId="formEmail" style={{ marginTop: '2.5vw', flex: 1,marginLeft:"-23vw" }}>
      <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}} >E-mail</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="custom-form-group transparent-input"
        style={{width:"22.46vw",height:"2.9vw"}}
      />
    </Form.Group>
  </div>

  <Form.Group controlId="formNumber" style={{ marginTop: '1.5vw' }}>
    <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"1.3vw"}}>Contact number</Form.Label>
    <Form.Control
      variant="text"
      name="number"
      value={formData.number}
      onChange={handleChange}
      rows={1}
      required
      className="custom-form-group transparent-input"
      style={{ width:"22.46vw",height:"2.9vw" }}
    />
  </Form.Group>
          <Button id="contactsubmit" variant="outline-warning" type="submit" style={{ marginTop: '0.72vw', marginBottom:"1vw" }}>
            Submit
          </Button>
</div>


        </Form>
      )}
      {showMessage && (
        <div style={{width:"68.04vw",height:"10.14vw", border: "0.22vw solid rgba(255, 203, 111, 1)", borderRadius:"1.09vw",marginLeft:"2.5vw",marginTop:"9vw",display:"flex", flexDirection: "column", alignItems: "flex-start"  }}>
        <p style={{fontFamily:"Proxima Bol", fontSize:"1.74vw",paddingTop:"2vw",paddingLeft:"2vw"}}>We are not hiring at the moment.</p>
        <p style={{fontFamily:"Proxima Nova", fontSize:"1.3vw",paddingLeft:"2vw",marginTop: "-1.3vw"}}>Please visit the website again in a few days to check our hiring opportunities. See you again.</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
