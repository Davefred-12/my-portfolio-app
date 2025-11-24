/* eslint-disable no-unused-vars */
import React from "react";
import "./Companies.css";

const Companies = () => {
  // Add your company logos here
  const companies = [
    { name: "Mo Apartments", logo: "/images/logo3.png" },
    { name: "Tech Alpha", logo: "/images/Logos.jpg" },
    { name: "Opajr Books", logo: "/images/logo2.png" },
    { name: "ShopAM", logo: "/images/logo1.png" },
    { name: "Debcas Healthcare", logo: "/images/logo4.jpg" },
    { name: "Uncle Ajala", logo: "/images/Uncles.png" },
    { name: "Bellefull Foods", logo: "/images/logo.png" },
    { name: "Dale Wears", logo: "/images/Dale.jpg" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="companies">
      <div className="companies-container">
        <div className="companies-header">
          <span className="companies-tag">Trusted By</span>
          <h2 className="companies-title">Companies I've Worked With</h2>
          <p className="companies-subtitle">
            Proud to have collaborated with amazing clients across different
            industries
          </p>
        </div>

        <div className="companies-scroll-wrapper">
          <div className="companies-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div key={index} className="company-card">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="company-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
