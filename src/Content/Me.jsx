// import React from 'react'
import Photo from "../assets/down.jpg";

function Me() {
  return (
    <>
      <div className="about-intro row text-white">
        <h1 className="text-white heading">About.....</h1>
        <div className="flex row">
          <div className=" about-image col-lg-4">
            <img src={Photo} alt="" />
          </div>
          <div className="col-lg-8">
            <div className="head ">
              <h1>Web Developer</h1>
              <h3>Begginer</h3>
            </div>
            <div className="#">
              <p className="py-2 paragraph ">
                Passionate beginner in the realm of technology and creativity,
                eagerly stepping into the world of web development to craft
                digital experiences that blend innovation and design. Excited to
                embark on a journey of learning and growth, driven by curiosity
                and a desire to create impactful solutions. While I&apos;m new
                to this realm, my dedication and enthusiasm drive me to learn,
                explore, and contribute. With every step I take, I&apos;m
                committed to developing my skills and knowledge, and I&apos;m
                excited to embark on this journey of growth and achievement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Me;
