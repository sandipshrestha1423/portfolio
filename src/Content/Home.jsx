import { IoMenu } from "react-icons/io5";

function Home() {
  return (
    <>
      <div className=" home" id="home">
        <div className="menu-button">
          <IoMenu />
        </div>
        <div className="me">
          <p className="name">Sandip Shestha</p>
          <p className="intro">I&apos;m Developer</p>
        </div>
      </div>
    </>
  );
}
export default Home;
