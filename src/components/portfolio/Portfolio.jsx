import React, { useEffect, useState } from "react";
import "./portfolio.css";
import ProjectItem from "./ProjectItem";
//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { TOKEN, DATABASE_ID } from "../../config";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "WorkPeriod",
          direction: "descending",
        },
      ],
    }),
  };

  const fetchData = async () => {
    const res = await fetch(`v1/databases/${DATABASE_ID}/query`, options);

    setProjects(await res.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      {projects.length < 1 ? null : (
        <Swiper
          className="portfolio__container"
          slidesPerView={"auto"}
          centeredSlides={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              width: "100%",
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {projects.results.map((aProject) => (
            <SwiperSlide className="project__card" key={aProject.id}>
              <ProjectItem key={aProject.id} data={aProject} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
