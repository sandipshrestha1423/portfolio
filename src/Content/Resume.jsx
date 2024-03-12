// import React from 'react'

function Resume() {
  return (
    <>
      <div
        className="resume row "
        id="resume"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="heading">My Resume</h1>

        <div className="resume-content">
          <div className="resume-topic">--Summary--</div>
          <div className="resume-title">Sandip Shrestha</div>
          <div className="resume-info">
            <p>
              Dedicated Web Developer with a passion for crafting elegant and
              functional user experiences through clean code and creative design
              solutions.
            </p>
            <li>Kathmandu,Nepal</li>

            <li>shresthasandip1423@gmail.com</li>
          </div>
        </div>
        <div className="resume-content">
          <div className="resume-topic">Skills</div>
          <div className="resume-title">HTML</div>
          <div className="resume-info">
            <p>
              Confident in crafting structured and meaningful web content using
              HTML5.
            </p>
          </div>
          <div className="resume-title">CSS</div>
          <div className="resume-info">
            <p>
              Skilled in designing visually appealing and responsive web layouts
              through CSS3, including flexbox and grid systems.
            </p>
          </div>
          <div className="resume-title">JavaScript</div>
          <div className="resume-info">
            <p>
              Beginner-level understanding of JavaScript fundamentals, such as
              variables, functions, and basic DOM manipulation.
            </p>
          </div>
          <div className="resume-title">React</div>
          <div className="resume-info">
            <p>
              Proficient in building robust and efficient user interfaces with
              React.js, utilizing component-based architecture and state
              management techniques.
            </p>
          </div>
        </div>
        <div className="resume-content">
          <div className="resume-topic">Education</div>
          <div className="resume-title">10+2</div>
          <div className="resume-info">
            <p className="date">2021-2023</p>
            <p>
              Diligent +2 graduate with a passion for computer science and a
              drive to excel. Proficient in coding and problem-solving, eager to
              contribute to tech innovation.
            </p>
          </div>
          <div className="resume-title">Bachelor</div>
          <div className="resume-info">
            <p className="date">2023-Present</p>
            <p>
              Aspiring computer science student with a strong foundation in
              programming and a hunger for knowledge. Enthusiastic about
              leveraging technology to create meaningful solutions.
            </p>
          </div>
        </div>
        <div className="resume-content">
          <div className="resume-topic">External Training</div>
          <div className="resume-title">Karate</div>
          <div className="resume-info">
            <p className="date">2015-2020</p>
            <p>
              Five years of dedicated Karate training culminating in the
              achievement of a coveted black belt, showcasing discipline,
              perseverance, and mastery of martial arts techniques.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
