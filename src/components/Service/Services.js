import React from "react";
import { motion } from "framer-motion";
import Card from "../utils/Card/Card";
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";

import "./Services.css";
import ButtonClick from "../utils/Button/Button";

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch("Lailatul Fitriyah_Cv.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "SamplePDF.pdf";
      alink.click();
    });
  });
};

const Services = () => {
  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span >My Awesome</span>
        <span>services</span>
        <spane>
          i'm a web developer and designer with 2 years of experience in the field of web development and design. i have a passion for web development and design. i am also a freelancer and i am ready to work with you.
        </spane>
        <ButtonClick 
          children="Download CV"
          className="button s-button"
          onClick={onButtonClick}
        />
        {/* <button className="button s-button" onClick={onButtonClick}>
          Download CV
        </button> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "22rem", left: "25rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;