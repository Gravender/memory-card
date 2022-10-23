import React from "react";
const Footer = (props) => {
  return (
    <footer
      style={{
        display: "flex",
        backgroundColor: "rgba(255, 0, 0, 0.63)",
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
        height: "25px",
        marginLeft: "0px",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "-1",
      }}
    >
      <p style={{ color: "white", margin: "5px", fontFamily: "Helvetica" }}>
        Made by:{" "}
        <a style={{ color: "white" }} href="https://github.com/Gravender">
          Gravender
        </a>
      </p>
    </footer>
  );
};
export default Footer;
