import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./styles.scss";
import ImageOne from "../../images/pexels-cottonbro-5483077.jpg";
import ImageTwo from "../../images/pexels-jorge-jesus-614117.jpg";

const portfolioData = [
  {
    sectionId: 2,
    projectName: "Voting Application",
    projectLink: "https://github.com/ydvankit1/Quick_Vote",
    image: ImageOne,
  },
  {
    sectionId: 2,
    projectName: "Chatting Application",
    projectLink: "https://github.com/ydvankit1/chitChat",
    image: ImageTwo,
  },
];

const filteroptions = [
  { label: "All", id: 1 },
  { label: "Development", id: 2 },
];

function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filterValue, setFiltervalue] = useState(1);

  const updatedPortFolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filteroptions.map((option) => (
            <li
              className={option.id === filterValue ? "active" : ""}
              onClick={() => setFiltervalue(option.id)}
              key={option.id}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {updatedPortFolioData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a
                  href={item.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.image} alt={item.projectName} />
                </a>
              </div>
              {index === hoveredIndex && (
                <div className="overlay">
                  <p>{item.projectName}</p>
                  <a
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Visit</button>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
