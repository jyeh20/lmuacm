import "./Home.css";

import logo from "../../assets/logo.png";

import EventsTable from "../../components/Home/EventsTable/EventsTable";
import Contact from "../../components/Home/Contact/Contact";

const Home = (props) => {
  const { color, bgColor, eventDoc } = props;

  return (
    <>
      <img className="Home-bg-img" src={logo} alt="LMU ACM logo"></img>
      <div
        className="Home-content"
        style={{
          backgroundColor: bgColor,
          color: color,
        }}
      >
        <div className="Home-content-title" style={{ color: color }}>
          Our Purpose
        </div>
        <div className="Home-purpose">
          <div className="Home-purpose-header">
            The Chapter is organized and will be operated exclusively for
            educational and scientific purposes to promote the following:
          </div>
          <ol type="I">
            <li className="Home-purpose-paragraph">
              An increased knowledge of and greater interest in the science,
              design, development, construction, languages, management and
              applications of modern computing.
            </li>
            <li className="Home-purpose-paragraph">
              Greater interest in computing and its applications.
            </li>
            <li className="Home-purpose-paragraph">
              A means of communication between persons having an interest in
              computing and those with an interest in applying computing in
              other fields.
            </li>
          </ol>
        </div>

        <div className="Home-content-title" style={{ color: color }}>
          Events
        </div>
        <EventsTable eventDoc={eventDoc} />
        <div className="Home-content-title" style={{ color: color }}>
          Contact Us
        </div>
        <Contact color={color} />
      </div>
    </>
  );
};

export default Home;
