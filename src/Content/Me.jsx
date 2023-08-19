// import React from 'react'
import Photo from "../assets/down.jpg";

function Me() {
  return (
    <>
      <div className="about-intro row text-white">
        <h1 className="text-white">About Me.....</h1>
        <div className="col-lg-3 about-image">
          <img src={Photo} alt="" />
        </div>
        <div className="left col-lg-4">
          <div className="head">
            <h1>Web Designer</h1>
            <h3>Begginer</h3>
          </div>

          <p className="py-2">
            Passionate beginner in the realm of technology and creativity,
            eagerly stepping into the world of web development to craft digital
            experiences that blend innovation and design. Excited to embark on a
            journey of learning and growth, driven by curiosity and a desire to
            create impactful solutions.
          </p>
        </div>
        <div className="col-lg-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae autem
            repellendus reprehenderit commodi ducimus, explicabo natus quas qui
            nemo ut. Magni, architecto ducimus doloremque iste quas laudantium
            beatae optio obcaecati!
          </p>
        </div>
      </div>
    </>
  );
}

export default Me;
