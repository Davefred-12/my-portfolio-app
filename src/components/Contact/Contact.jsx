// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
  
    const emailParams = {
      to_name: "DaleTech Team",  
      from_name: formData.name,  
      email: formData.email,    
      Subject: formData.subject, 
      message: formData.message  
    };
  
    emailjs.send(
      'service_cwxxde4',      
      'template_zi0hxor',     
      emailParams,        
      'mtSO1FfX1cSumYMd4'      
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setError('');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSuccess(false), 5000);
    }, (err) => {
      console.log('FAILED...', err);
      setError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-tag">Get In Touch</span>
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-details">
                <h3>Email</h3>
                <a href="mailto:adeleyepamilerin9@gmail.com">
                  adeleyepamilerin9@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-details">
                <h3>Phone</h3>
                <a href="tel:+2348165619543">
                  +234 816 561 9543
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-details">
                <h3>Location</h3>
                <p>
                  2, Road C, Iroko Estate<br />
                  Igando, Lagos State, Nigeria
                </p>
              </div>
            </div>

            <div className="contact-cta-box">
              <h3>Prefer a quick call?</h3>
              <p>I'm available Monday to Friday, 9AM - 6PM WAT</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form-textarea"
                  rows="6"
                />
              </div>

              <button 
                onClick={handleSubmit}
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="button-loader"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="button-icon" />
                  </>
                )}
              </button>

              {success && (
                <div className="success-message">
                  <FaCheckCircle />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {error && (
                <div className="error-message">
                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;