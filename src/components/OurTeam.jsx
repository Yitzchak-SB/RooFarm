import React from "react";
import Avatar from "react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Dovid_Baars from "../images/profile_pics/Dovid_Baars.png";
import Nicolás_Videla_Guahnon from "../images/profile_pics/Nicolás_Videla_Guahnon.png";
import Ron_Zehavi from "../images/profile_pics/Ron_Zehavi.png";
import Sebastian_Kleiner from "../images/profile_pics/Sebastian_Kleiner.png";
import Solomiia_Ivychuk from "../images/profile_pics/Solomiia_Ivychuk.png";
import Yitzchak_Siegel from "../images/profile_pics/Yitzchak_Siegel-Bareket.png";
import Serah_Tapia from "../images/profile_pics/Serah_Tapia.png";
import "../css files/OurTeam.css";

const OurTeam = () => {
  return (
    <div className="our-team">
      <h1 className="team-header">Our Team</h1>
      <h3 className="team-second">Full-Stack</h3>
      <div className="team-div">
        <div className="profile">
          <Avatar size={100} round={true} src={Dovid_Baars} />
          <span className="link-name">Dovid Baars</span>
          <a
            className="linked-link"
            href="https://www.linkedin.com/in/dovidbaars/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="profile">
          <Avatar size={100} round={true} src={Yitzchak_Siegel} />
          <span className="link-name">Yitzchak Siegel-Bareket</span>
          <a
            className="linked-link"
            href="https://www.linkedin.com/in/yitzchak-siegel-bareket/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="profile">
          <Avatar size={100} round={true} src={Solomiia_Ivychuk} />
          <span className="link-name">Solomiia Ivychuk</span>
          <a
            className="linked-link"
            href="https://www.linkedin.com/in/solomiia-ivychuk-b30a52188/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="profile">
          <Avatar size={100} round={true} src={Nicolás_Videla_Guahnon} />
          <span className="link-name">Nicolás Videla Guahnon</span>
          <a
            className="linked-link"
            href="https://www.linkedin.com/in/nicolas-videla-27941272/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <h3 className="team-second">Data Science</h3>
      <div className="team-div">
        <div className="profile">
          <Avatar size={100} round={true} src={Ron_Zehavi} />
          <span className="link-name">Ron Zehavi</span>
          <a
            className="linked-link"
            href="https://www.linkedin.com/in/ron-zehavi/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="profile">
          <Avatar size={100} round={true} src={Serah_Tapia} />
          <span className="link-name">Serah Tapia (Abensour)</span>
          <a
            className="linked-link"
            href="https://www.linkedin.com/in/serah-tapia-abensour-b614ab24/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="profile">
          <Avatar size={100} round={true} src={Sebastian_Kleiner} />
          <span className="link-name">Sebastian Kleiner</span>
          <a
            className="linked-link"
            href="https://www.linkedin.com/in/sebastiankleiner/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
