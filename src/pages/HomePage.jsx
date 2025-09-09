import React from "react";
import Slider from "../components/Slider/Slider";
import Blogs from "../components/Blogs/Blogs";
import Testimonial from "../components/Testimonial/Testimonial";
import TeamSection from "../components/TeamSection/TeamSection";
import Footer from "../components/Footer/Footer";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";

const HomePage = () => {
  DynamicTitle("Home");

  return (
    <div>
      {/* Slider Section */}
      <section className="slider">
        <Slider></Slider>
      </section>
      {/* Blog Section */}
      <section className="blogs">
        <Blogs />
      </section>
      <section>
        <Testimonial></Testimonial>
      </section>
      <section>
        <TeamSection></TeamSection>
      </section>
    </div>
  );
};

export default HomePage;
