import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import dummyData from "../../dummyData";

const Container = styled.div`
  width: calc(100% - 40px);
  height: 6vh;
  margin: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-slide {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Misson = styled.div`
  position: absolute;
  left: 10px;
  top: 3.5px;
  color: white;
  background-color: #ff4200;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  width: 40px;
  height: 80%;
`;

function Slider() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [sliderDummy, setSliderDummy] = useState([
    "[ETH] 46번째 로그가 기록되었습니다.",
    "[ETH] 47번째 로그가 기록되었습니다.",
    "[ETH] 48번째 로그가 기록되었습니다.",
    "[ETH] 49번째 로그가 기록되었습니다.",
    "[ETH] 50번째 로그가 기록되었습니다.",
  ]);

  const getData = () => {
    setNowPlaying(dummyData.funItem2.result.slice(0, 6));
  };

  useEffect(() => {
    getData();
  }, []);

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <Container>
      <SwiperStyle
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        direction="vertical"
      >
        {!nowPlaying ? (
          <SwiperSlide>loading...</SwiperSlide>
        ) : (
          sliderDummy.map((item, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                color: "black",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            >
              {item}
            </SwiperSlide>
          ))
        )}
        <Misson>미션</Misson>
      </SwiperStyle>
    </Container>
  );
}

export default Slider;
