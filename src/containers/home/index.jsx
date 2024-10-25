import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import {FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles.scss";
import MyPdf from "../../resumeSample/ProfessionalResume.pdf";
function Home() {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Ankit Yadav.
          <br />
          B.Tech. CSE(4th-yr) student,
          <br />
          SWE Intern at MyMobiforce,
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact-me">
            <div className="contact-me__buttons-wrapper">
              {/* <button onClick={() => navigate("/contact")}>Hire Me</button> */}
              <a href={MyPdf} download="AnkitResume.pdf">
                Download Resume
              </a>
            </div>
            <div className="contact-me__socials-wrapper">
              {/* <FaLinkedin size={32} /> */}
              <a href="https://www.linkedin.com/in/ankit-yadav-5a6267227/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={32} />
  </a>   
  <a href="https://github.com/ydvankit1" target="_blank" rel="noopener noreferrer">
    <FaGithub size={32} />
  </a>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default Home;
