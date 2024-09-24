/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Converts form data to JSON
        });

        const result = await response.json(); // Parses the JSON response
        if (response.ok) {
            setSuccess(true); // Set success state if the response is OK
            setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
        } else {
            setError(result.message); // Set error state if not OK
        }
    } catch (error) {
        setError('There was an issue submitting the form.'); // Handle any fetch errors
    }
};


  return (
<div id="contact" className="contact-container">
      <div className="contact-info">
        <h1>Lets work together</h1><br></br><br></br>
        <p><b>Mail:</b><br></br> adeleyepamilerin9@gmail.com</p><br></br><br></br>
        <p><b>Address:</b><br></br>2, Road C, Iroko Estate, Igando, Lagos State, Nigeria.</p><br></br><br></br>
        <p><b>Phone:</b><br></br> +234 816 561 9543</p>
      </div>
      <div className="phone-form-container" onAnimationEnd={() => setAnimationCompleted(true)}>
        <div className="phone-animation">
          <i className="phone-icon">📞</i> {/* Replace with an SVG or image if you have one */}
        </div>
        {animationCompleted && (
         <form onSubmit={handleSubmit} className="contact-form">
         {}
      
     
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
