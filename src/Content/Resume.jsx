// import React from 'react'

function Resume() {
  return (
    <>
      <div className="resume row">
        <div className="col-lg-6">
          <h1>My Resume</h1>
          <div className="resume-content">
            <div className="resume-topic">--Summary--</div>
            <div className="resume-title">Sandip Shrestha</div>
            <div className="resume-info">
              <p>
                Dedicated Web Developer with a passion for crafting elegant and
                functional user experiences through clean code and creative
                design solutions.
              </p>
              <li>Kathmandu,Nepal</li>
              <li>9808080808</li>
              <li>shresthasandip1423@gmail.com</li>
            </div>
          </div>
          <div className="resume-content">
            <div className="resume-topic">Education</div>
            <div className="resume-title">10+2</div>
            <div className="resume-info">
              <p className="date">2021-2023</p>
              <p>BhanuBhakta Memorial College</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="resume-content">
            <div className="resume-topic">Training</div>
            <div className="resume-title">Karate</div>
            <div className="resume-info">
              <p className="date">2015-2020</p>
              <p>BhanuBhakta Memorial College</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
