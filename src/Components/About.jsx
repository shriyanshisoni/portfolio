/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/milky-way.jpg";

const imageAltText = "galaxy background,starry and beautiful";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hey there! I'm a sophomore studying Computer Science & Engineering internet of things and blockchain technology student at LNCT'22-LNCT'26📚, pursuing a degree of bachelor of technology";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "python programming",
  "object-oriented programming",
  "leadership",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Concentration on web development and cyber security techniques,Diligently participating in hackethons with innovative project ideas,Fascinated about technology,technical development, IT and startups,Passionately love to work on startup ideas, development and real-time problem solving.🌟,Presently working on learning programming languages,data structure and structures algorithms";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
