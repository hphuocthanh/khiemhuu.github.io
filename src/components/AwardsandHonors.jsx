// src/components/AwardsAndHonors.jsx
import React from 'react';
import './AwardsAndHonors.css';

const AwardsAndHonors = () => {
  return (
    <section id="awards" className="awards">
      <h2>Awards & Honors</h2>
      <div className="awards-list">
        
        <div className="award-item">
          <h3>Engineering and Information Sciences Scholars and Advanced Scholarship</h3>
          <p>
            Awarded for outstanding academic achievements within the Faculty of Engineering and Information Sciences.
            Recognizes excellence in the field of Information Technology and consistent performance in the program.
          </p>
          <p className="award-date">Issued by University of Wollongong · Sep 2024</p>
        </div>

        <div className="award-item">
          <h3>Executive Dean's Merit List 2023</h3>
          <p>
            Recognized for achieving a Weighted Average Mark ranking in the top 5% of students in the undergraduate program. 
            Highlights dedication and academic excellence in the field of Information Technology.
          </p>
          <p className="award-date">Issued by Faculty of Engineering and Information Sciences, University of Wollongong · Jul 2024</p>
        </div>

        <div className="award-item">
          <h3>UOW University Excellence Scholarship</h3>
          <p>
            Scholarship awarded for academic excellence and outstanding performance throughout the course of study. 
            Supports and encourages students who demonstrate strong academic abilities.
          </p>
          <p className="award-date">Issued by University of Wollongong</p>
        </div>

      </div>
    </section>
  );
};

export default AwardsAndHonors;
