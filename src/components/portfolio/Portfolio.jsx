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

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/api", { method: POST });

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
