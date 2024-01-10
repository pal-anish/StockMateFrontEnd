import React from "react";
import Header2 from "../Header2/Header2";
import profile from "../Assets/MyProfilePic.jpg";

import { Container } from "react-bootstrap";

import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiPostman } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoCss3 } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import "./About.css";

export default function About() {
  return (
    <>
      <Header2 />
      <div className="about">
        <Container className="about">
          <h3>STOCKMATE APP</h3>
          <p className="customtextstyle">
            An application which helps us to learn more about different stocks
            easily. User will be able to find the list of all stocks based on
            country name. Be able to save stock details to a Wishlist so that
            you can access them later. Also be able to delete stock details
            saved to their Wishlist
          </p>
          <hr />
          <h3>Technology Used</h3>
          <h5>Backend</h5>
          <p>
            <FaJava size={40} className="tech-icons" data-testid="java-icon" />
            <BiLogoSpringBoot size={40} className="tech-icons" data-testid="spring-boot-icon"/>
            <GrMysql size={40} className="tech-icons" data-testid="mysql-icon"/>
            <SiPostman size={40} className="tech-icons" data-testid="postman-icon"/>
          </p>
          <h5>Frontend</h5>
          <p>
            <FaReact size={40} className="tech-icons" data-testid="react-icon"/>
            <FaHtml5 size={40} className="tech-icons" data-testid="html5-icon"/>
            <BiLogoCss3 size={40} className="tech-icons" data-testid="css3-icon"/>
            <TbBrandJavascript size={40} className="tech-icons" data-testid="javascript-icon"/>
          </p>

          <hr />
          <h3>Developer</h3>
          <div className="profile-container">
            <img className="profile-image" src={profile} alt="Profile Image" />
            <div className="profile-text">
              <h2>Anish Pal</h2>
              <h5>Programmer Analyst</h5>
              <h6>Cognizant</h6>
              <p>
                Email:{" "}
                <a href="mailto:Anish.Pal@cognizant.com">
                  Anish.Pal@cognizant.com
                </a>
              </p>
            </div>
          </div>

          <h3>Personal Links</h3>
          <div className="personal-links">
            <a href="https://github.com/pal-anish">
              <FaGithub size={30} data-testid="github-link"/>
            </a>
            <a href="https://www.linkedin.com/in/anish-pal-177726173">
              <BsLinkedin size={30} data-testid="linkedin-link"/>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
