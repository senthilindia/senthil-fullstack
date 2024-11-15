import React from "react";
import "./about.css";
import myImage from "../../assets/my-image2.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                MCA <br />
                <i>University of Bharathiyar.</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current Percentage</h5>
              <small>70%</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Net Centric</li>
                  <li>Technical Architect</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a <b>Technical Architect</b> at HCL. A results-oriented
            full-stack developer with 9+ years of experience in building dynamic
            web applications. Skilled in front-end development (JavaScript,
            ReactJS, NextJS) and back-end (NodeJS, ExpressJS). Proficient in
            deploying solutions on AWS and experienced in modern practices like
            Micro Frontends and Agile. Focused on delivering high-quality,
            scalable SPAs and customer-centric solutions, Team Handling,
            Mentoring.
            <br />
            <b>
              Core Skills: JavaScript, TypeScript, ReactJS, NextJS, NodeJS,
              ExpressJS, AWS, GitHub, CI/CD, Docker.
            </b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
