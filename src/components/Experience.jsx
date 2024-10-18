import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
    <h2>Experience and Education</h2>
      <div className="experience-item">
        <p className="experience-date">JUL 2023 - JUL 2026</p>
        <h3 className="experience-title1">Student at University of Wollongong, Australia</h3>
        <h4 className="experience-title2">Bachelor of Information Technology</h4>
        <h4 className="experience-title3">Major in Website Design and Development</h4>

        <p className="experience-description">
          I am pursuing the degree of Information Technology. Fortunately, I have a chance of enrolling into Dean's Scholar (the extraordinary program for student who achieved the higher mark)
          giving me a good chance to meet amazing people. 
        </p>
        <div className="education-tags">
          <span><strong>AVERAGE GRADE:</strong> 90.5</span>
          <span><strong>ACTIVITIES AND SOCIETY - UOWx Program:</strong>
            <br/>UOW Volunteer - In Progress
            <br/>Content Creator in Communication Team UOW - In Progress</span>
            <span><strong>High Distinction in: </strong>
            <br/>CSIT110 - Fundamental Programming with Python (100/100)
            <br/>MATH255 - Mathematics for Computing (98/100)
            <br/>CSIT115 - Data Management and Security (95/100)
            <br/>CSIT114 - System Analysis (95/100)
            <br/>CSIT128 - Introduction to Web Technology (94/100)
            <br/>CSIT123 - Computing and Cyber Security Fundamentals (85/100)</span>
            <span><strong>Distinction in: </strong>
            <br/>CSIT121 - Object Oriented Design and Programming (83/100)
            <br/>CSIT127 - Networks and Communications (82/100)</span>
        </div>
        <div className="experience-tags">
          <span>React</span>
          <span>UI/UX Design</span>
          <span>Python</span>
          <span>Database</span>
        </div>
      </div>

      <div className="experience-item">
        <p className="experience-date">SEP 2018 - JUL 2022</p>
        <h3 className="experience-title1">Student at 
        Huynh Thuc Khang High School - Collège de Vinh</h3>
        <h4 className="experience-title2">A8 Class of 2022</h4>

        <p className="experience-description">
          
        </p>
        <div className="education-tags">
          <span><strong>AVERAGE GRADE:</strong> 9.3/10</span>
          <span><strong>ACTIVITIES AND SOCIETY - Youth Union Program:</strong>
            <br/>Former Head of the Design Department at Thunder Debate Club (TDC)
            <br/>Former Head of the Design Department, Founder Team at HIGGS - Huynh Thuc Khang Science Club
            <br/>Former Crew Member of the Design and Media Department at Phan Cinephilia Club
            <br/>Former Vice President of Break Out Crew (Dance Club)
            <br/>Former Head of the Media Department at Huynh Thuc Khang English Club (H.E.C)
            <br/>Former Member of the Design Department at Youth Unity Model United Nations (YUMUN)</span>
        </div>
        <div className="experience-tags">
          <span>Focus on Maths, Physics and English (Second Language)</span>
          <span>Information Technology Specialised Team</span>
          <span>Graduated with Excellent Class</span>
        </div>
      </div>

    </section>
  );
};

export default Experience;