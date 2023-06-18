import "./HomeT.css";
import Typewriter from "typewriter-effect";

import React from "react";
// import download from "../assets/background.jpg";
import backvedio from "../assets/background vedio.mp4";
import { Link } from "react-scroll";

const HomeT = () => {
  return (
    <div className="homeT">
      <div className="mask">
        {/* <img className="download" src={download} alt="download" /> */}
        <video src={backvedio} autoPlay loop muted />
      </div>
      <div className="content">
        <p className="tt">
          HI, I'M <span className="sp">Sasida Dilhan</span>
        </p>
        <h1>
          <Typewriter
            options={{
              strings: ["Web Developer💻"],
              strings: ["Web Developer💻"],
              strings: ["Web Developer💻"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div>
          <a
            className="btn"
            href="Sasida Dilhan-CV.pdf"
            download="Sasida Dilhan.pdf"
          >
            RESUME
          </a>
          <Link
            to="form"
            className="btn-light"
            smooth={true}
            duration={500}
            style={{ cursor: `pointer` }}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeT;
