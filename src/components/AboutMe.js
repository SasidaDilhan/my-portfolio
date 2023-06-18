import "./AboutMe.css";
import myimg from "../assets/myimg.jpg";
import React from "react";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="title">
          <h1>About Me</h1>
          <div className="content1">
            <div className="article">
              <h3>
                As a student of software engineering, I have a great interest
                for developing creative software solutions that boost company
                performance by increasing productivity and effectiveness.I
                provide important leadership abilities with a track record of
                inspiring, motivating, and educating teams to any endeavor. I am
                a diligent and adaptable person with strong internal motivation
                and a positive outlook. I can work well with others because of
                my strong interpersonal and communication abilities.
              </h3>
            </div>
            <div className="image">
              <img className="myimg" src={myimg} alt="myimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
