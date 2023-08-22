// import React from 'react'
import Photo from "../assets/down.jpg";

function Me() {
  return (
    <>
      <div className="about-intro row text-white">
        <h1 className="text-white">About Me.....</h1>
        <div className="flex row">
          <div className=" about-image col-lg-6">
            <img src={Photo} alt="" />
          </div>

          <div className="head col-lg-6">
            <h1>Web Designer</h1>
            <h3>Begginer</h3>
          </div>
        </div>
        <div className="row">
          <p className="py-2 paragraph col-lg-6">
            Passionate beginner in the realm of technology and creativity,
            eagerly stepping into the world of web development to craft digital
            experiences that blend innovation and design. Excited to embark on a
            journey of learning and growth, driven by curiosity and a desire to
            create impactful solutions. While I&apos;m new to this realm, my
            dedication and enthusiasm drive me to learn, explore, and
            contribute. With every step I take, I&apos;m committed to developing
            my skills and knowledge, and I&apos;m excited to embark on this
            journey of growth and achievement.
          </p>

          <div className="col-lg-6 paragraph">
            <p>
              As a newcomer in the field, my journey is just beginning, but my
              enthusiasm and commitment are unwavering. I&apos;m fully dedicated
              to diving into the intricacies of this field and embracing every
              learning opportunity that comes my way. Challenges don&apos;t
              deter me; they inspire me to persevere and evolve. Despite being
              at the early stages, my determination and eagerness to excel are
              driving me forward. I&apos;m excited to channel my energy into
              honing my skills, gaining experience, and contributing positively
              to this dynamic field.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Me;
