import Mission from "./mission";
import "./about.css";

const About = ({ name = "elmo" }) => {
  return (
    <>
      <div id="title-01">
        <h1> About </h1>
        <h1 id="Title-About"> Toronto cupcakes</h1>
      </div>
      <div id="information-about-01">
        <img
          src="https://pbs.twimg.com/profile_images/1281234061357391873/a_eRlunA_400x400.jpg"
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

      <div id="mission-div">
        <Mission purpose="Mission" />
      </div>
      <div id="mission-div-2">
        <Mission purpose="Vission" />
      </div>
    </>
  );
};

export default About;
