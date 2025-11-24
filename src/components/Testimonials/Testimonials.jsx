/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      name: 'Mrs Motunrayo Ologunwa',
      position: 'Owner, Mo Apartments',
      location: 'United Kingdom',
      rating: 5,
      text: "Adewale's expertise in web development is unmatched. He built a stunning property management platform for Mo Apartments that has streamlined our entire rental process. Our clients love the user-friendly interface, and we've seen a remarkable increase in bookings."
    },
    {
      name: 'Dr Olatunde Israel',
      position: 'Owner, Uncle Ajala',
      location: 'Nigeria',
      rating: 5,
      text: "I'm thoroughly impressed with Adewale's work on the Uncle Ajala platform. He captured the essence of what we wanted to achieve and delivered a website that beautifully showcases travel experiences. His creativity, technical prowess, and dedication to quality are outstanding."
    },
    {
      name: 'Mrs Elizabeth Taiwo',
      position: 'Owner, Debcas Healthcare',
      location: 'United Kingdom',
      rating: 5,
      text: 'Working with Adewale was an absolute pleasure. He transformed our healthcare platform into something truly exceptional. His attention to detail and understanding of our needs resulted in a system that has significantly improved our patient management.'
    },
    {
      name: 'Mrs Maria Lawal',
      position: 'Owner, Opajr Books',
      location: 'United Kingdom',
      rating: 5,
      text: 'The digital bookstore Adewale created for Opajr Books exceeded all our expectations. His innovative approach and technical skills brought our vision to life perfectly. The platform is elegant, functional, and has helped us reach a much wider audience.'
    }
  ];

  const totalPages = 2; // 2 pages (0 and 1)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Get current 2 testimonials to display
  const startIndex = currentPage * 2;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + 2);

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-tag">Client Feedback</span>
          <h2 className="testimonials-title">What Clients Say</h2>
          <p className="testimonials-subtitle">
            Don't just take my word for it—hear from clients who've experienced the difference
          </p>
        </div>

        <div className="testimonials-slider-wrapper">
          <button 
            className="slider-nav-button prev" 
            onClick={prevPage}
            aria-label="Previous testimonials"
          >
            <FaChevronLeft />
          </button>

          <div className="testimonials-grid">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={startIndex + index}
                className="testimonial-card animate-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <FaQuoteLeft className="quote-icon" />
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>

                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    <span>{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                    <span className="author-location">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="slider-nav-button next" 
            onClick={nextPage}
            aria-label="Next testimonials"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="testimonials-dots">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;