import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import CategoryCard from "./BlogCard";
import BlogCard from "./BlogCard";

const BlogsSlider = () => {
  const blogs = [
    {
      name: "Blog 1",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 2",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 3",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 4",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 5",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 6",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 7",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 8",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 9",
      path: "#",
      bgcolor: "black",
    },
    {
      name: "Blog 10",
      path: "#",
      bgcolor: "black",
    },
  ];

  return (
    <>
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "400",
          margin: "10px 5px",
        }}
      >
        Blogs
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blogs.map((blog, i) => {
          return (
            <SwiperSlide key={i}>
              <BlogCard {...blog} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default BlogsSlider;
