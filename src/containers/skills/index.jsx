import React from "react";
import { GiSkills } from "react-icons/gi"; 
import PageHeaderContent from "../../components/PageHeaderContent";
import { Line } from "rc-progress";
import { AnimateKeyframes, Animate } from "react-simple-animate";
import "./styles.scss";
const data = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        percentage: "95",
      },
      {
        skillName: "CSS",
        percentage: "95",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "90",
      },
      {
        skillName: "REACT.js",
        percentage: "90",
      },
    ],
  },
  {
    label: "BACK END",
    data: [
      {
        skillName: "PYTHON",
        percentage: "90",
      },
      {
        skillName: "Node.js",
        percentage: "80",
      },
      {
        skillName: "Express.js",
        percentage: "80",
      },
    ],
  },
  {
    label: "DATABASES",
    data: [
      {
        skillName: "MYSQL",
        percentage: "95",
      },
      {
        skillName: "MONGODB",
        percentage: "80",
      },
    ],
  },
];
function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />
      <div className="skills__content-wrapper">
        {data.map((item) => (
          <div
            className="skills__content-wrapper__inner-content"
            key={item.label}
          >
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {item.data.map((skill) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={skill.skillName}>
                      <p>{skill.skillName}</p>
                      <Line
                        percent={skill.percentage}
                        strokeWidth="2"
                        strokeColor="var(--selected-theme-main-color)"
                        strokeLinecap="square"
                        trailWidth="2"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
