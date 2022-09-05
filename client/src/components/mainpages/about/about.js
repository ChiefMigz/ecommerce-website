import Mission from "./mission";
import "./about.css";

const About = ({ name = "Michelle" }) => {
  return (
    <>
      <div id='title'>
        <span className="about">
          <h2>About</h2>
        </span>
        <h1>Toronto cupcakes</h1>
      </div>
      <div id='information-about-01'>
        <img
          src='https://pbs.twimg.com/profile_images/1281234061357391873/a_eRlunA_400x400.jpg'
          alt="-"
        />
        <div>
          <h2> About {name}</h2>
          <p>
            lorem ipsum text copy, lorem ipsum generator, lorem ipsum paragraph,
            dummy text generator, lorem ipsum sample text, lorem ipsum dolor sit
            amet full text, lorem ipsum html
          </p>
        </div>
      </div>

      <div id='mission-div'>
        <Mission purpose='Mission' />
      </div>
      <div id="mission-div-2">
        <Mission purpose="Vision" />
      </div>
    </>
  );
};

export default About;
