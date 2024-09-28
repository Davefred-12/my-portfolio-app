// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Define the parameters to be sent based on your form input
    const emailParams = {
      to_name: "DaleTech Team",  
      from_name: formData.name,  
      email: formData.email,    
      Subject: formData.subject, 
      message: formData.message  
    };
  
    // EmailJS send function
    emailjs.send(
      'service_ayhbt3p',      
      'template_zi0hxor',     
      emailParams,        
      'mtSO1FfX1cSumYMd4'      
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setError('');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    }, (err) => {
      console.log('FAILED...', err);
      setError('Failed to send message. Please try again.');
    });
  };
  ;

  return (
    <div id="contact" className="contact-container">
      <div className="contact-info">
        <h1>Lets work together</h1><br />
        <p><b>Mail:</b><br />adeleyepamilerin9@gmail.com</p><br />
        <p><b>Address:</b><br />2, Road C, Iroko Estate, Igando, Lagos State, Nigeria.</p><br />
        <p><b>Phone:</b><br />+234 816 561 9543</p>
      </div>
      <div className="phone-form-container" onAnimationEnd={() => setAnimationCompleted(true)}>
        <div className="phone-animation">
          <i className="phone-icon">📞</i>
        </div>
        {animationCompleted && (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
            {success && <p>Message sent successfully!</p>}
            {error && <p>{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
