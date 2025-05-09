import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="border-2" data-aoss="fade-up" data-aos-duration="1200">
        Homepage
        <Link to="/wishme">Send a Message</Link>
      </div>
    </>
  );
};

export default Homepage;
