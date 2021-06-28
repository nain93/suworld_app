import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import styled, { keyframes } from "styled-components";
import dummyData from "../dummyData";

const Container = styled.div`
  padding: 0 20px;
`;

const boxFade = keyframes`
   0% {
     opacity: 0;
    }
  100% {
     opacity: 1;
    }
`;

const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 18vh;
  .swiper-pagination-bullet {
    background-color: white;
    opacity: 0.6;
  }
  .swiper-pagination-bullet-active {
    background-color: #9100ff;
    width: 4%;
    border-radius: 3px;
    opacity: 1;
    animation: ${boxFade} 0.4s ease-in;
  }
`;

function SwiperC({ pageCount, page, dummyData }) {
  const [nowPlaying, setNowPlaying] = useState(null);

  const getData = () => {
    setNowPlaying(dummyData);
  };

  useEffect(() => {
    getData();
  }, []);

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <Container>
      <SwiperStyle
        spaceBetween={20}
        slidesPerView={pageCount}
        loop={true}
        pagination={page ? "" : { clickable: true }}
      >
        {!dummyData ? (
          <SwiperSlide>loading...</SwiperSlide>
        ) : (
          dummyData.map((item, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                color: "black",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              {/* <div className="title">{idx}</div> */}
            </SwiperSlide>
          ))
        )}
      </SwiperStyle>
    </Container>
  );
}

export default SwiperC;
