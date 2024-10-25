import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaBlackTie } from "react-icons/fa"; 
import PageHeaderContent from "../../components/PageHeaderContent";
import "./styles.scss";
const data = {
  experience: [
    {
      title: "Software Engineer Intern, ",
      subTitle: "MyMobiforce, Noida, India",
      description:
        " Flask APIs, GraphQL APIs, Firebase, Debugging, Postman, Docker",
    },

  ],
  education: [
    {
      title: "2018-2019, ",
      subTitle: "Central Board of Secondary Education",
      description:
        "10th Grade - 91.20% ",
    },
    {
      title: "2020-2021, ",
      subTitle: "Central Board of Secondary Education",
      description:
        "12th Grade - 93.60%",
    },
    {
      title: "Bachelor of Technology (2021-2025)",
      subTitle: "Lloyd Institute of Engineering and Technology (AKTU)",
      description:
        "Computer Science Engineering - 8.3 CGPA",
    },
  ],
};

function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Experience & Education"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
            {data.experience.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-sub-text-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Feb 2024 - Aug 2024"
                iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                icon={<MdWork />}
                dateClassName="vertical-timeline-element-custom-date"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
            {data.education.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-sub-text-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                // date="2018 - 2019"
                iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Resume;
