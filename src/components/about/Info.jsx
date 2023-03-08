import React from "react";

export default function info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about_icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Years Working</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about_icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}
