import React from "react";
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    value: "Ankit Yadav",
  },
  {
    label: "Address",
    value: "Greater Noida, India",
  },
  {
    label: "Email",
    value: "ankit2004.madhuri@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 9369424021",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <p>
    Hello! I am <strong>Ankit Yadav</strong>, a passionate and motivated <strong>Final year Computer Science Engineering student</strong> with hands-on experience 
    in <strong>full-stack development</strong> and <strong>Software Engineer Intern at MyMobiforce</strong>. I am currently pursuing a Bachelor of Technology in Computer Science and Engineering 
    at Lloyd Institute of Engineering and Technology, Greater Noida, with a CGPA of 8.3.
  </p>
  <p>
    I am proficient in programming languages like <strong>C, C++, Python, JavaScript,</strong> and have experience with modern libraries 
    and frameworks such as React.js, Node.js, and Express.js. I have also worked with databases like MySQL, MongoDB, and Firebase.
    I thrive in competitive environments, <strong> winning a 24-hour hackathon and earning top ranks on platforms like 
    LeetCode (solve 650+ problems), HackerRank (4-star), and Coding Ninjas (solve 150+ problems)</strong> .
  </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalDetails.map((item) => (
                <li key={item.label}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple color="var(--selected-theme-main-color)" size={60} />
                {/* <p className="service-text">Web Design</p> */}
              </div>
              <div>
                <FaDev color="var(--selected-theme-main-color)" size={60} />
                {/* <p className="service-text">Web Development</p> */}
              </div>
              <div>
                <FaDatabase color="var(--selected-theme-main-color)" size={60} />
                {/* <p className="service-text">Databases</p> */}
              </div>
              <div>
                <DiAndroid color="var(--selected-theme-main-color)" size={60} />
                {/* <p className="service-text">Android Developement</p> */}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
