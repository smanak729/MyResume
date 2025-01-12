import React from "react";
import "./Resume.css";

const Resume = () => {
    return(
        <div className="resume">
            <header className="header">
                <h1>Sukhi Manak</h1>
                <p>San Jose, California 95128 | (123) 456-7890 | smanak729@gmail.com</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <h3>Master of Science, Computer Science</h3>
                    <p>City University of Seattle | July 2026 </p>
                    <h3>Bachelor of Science, MCD Biology</h3>
                    <p>University of California, Santa Cruz</p>
                </div>
            </section>
            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Personal Website</h3>
                    <p>
                        Built a personal website using React and deployed it on Github Pages
                    </p>
                    <p>
                        Source code: {" "}
                        <a
                        href="http://guthub.com/studentname/personal-website"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            http://guthub.com/studentname/personal-website
                        </a>
                    </p>
                    <h3>Online Bookstore</h3>
                    <p>
                        Developed a web application for an online bookstore using Spring Boot and MySQL
                    </p>
                    <p>
                        Source code: {""}
                        <a
                        href="http://guthub.com/studentname/online-bookstore"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            http://guthub.com/studentname/online-bookstore
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume;