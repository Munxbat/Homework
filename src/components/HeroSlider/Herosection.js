import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Wrapper from "../UiStyle/Slider/Wrapper";
import Title from "../UiStyle/Title/Title";
import Subtitle from "../UiStyle/Subtitle/Subtitle";

// Зурагнууд
import hallstatt from "../../images/heroslider/hero_slider_1.jpeg";
import hvitserkur from "../../images/heroslider/hero_slider_1.jpeg";
import jacksonville from "../../images/heroslider/hero_slider_1.jpeg";
import moraineLake from "../../images/heroslider/hero_slider_1.jpeg";

const HeroSection = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${hallstatt})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <Wrapper>
            <Title>OPTIMIZE INC</Title>
            <Subtitle>Build More Together...</Subtitle>
          </Wrapper>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${hvitserkur})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${jacksonville})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${moraineLake})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
