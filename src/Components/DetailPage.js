import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import dummyData from "../dummyData";

const Container = styled.div`
  margin: 1% 0px;
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const ManinetBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20vh;
  margin: 1% 0px;
  > div {
    height: 100%;
    width: 45%;
    div {
      margin: 1% 0px;
      height: 80%;
      width: 100%;
      background-color: #8d9eba;
      display: flex;
    }
    span {
      height: 20%;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
  }
`;

const TableBox = styled.div`
  width: 100%;
  margin: 2% 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    height: 7vh;
    justify-content: space-between;
    align-items: center;
  }
  span:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    width: 80%;
  }
  span:last-child {
    font-size: 9pt;
    color: #191919;
  }
`;

const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 25vh;
  margin: 2% 0px;
  .swiper-slide {
    height: 80%;
    background-position: center center;
    background-size: cover;
    color: black;
    cursor: pointer;
    position: relative;
    > div {
      position: absolute;
      bottom: -25%;
    }
  }
  .swiper-pagination-bullet {
    background-color: white;
    opacity: 0.6;
  }
  .swiper-pagination-bullet-active {
    background-color: #9100ff;
    width: 4%;
    border-radius: 3px;
    opacity: 1;
  }
`;

function DetailPage({ data }) {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const [swiperSetting, setSwiperSetting] = useState({
    slidesPerView: 3.5,
  });

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSwiperSetting({
        slidesPerView: 2.5,
      });
      return;
    } else {
      setSwiperSetting({
        slidesPerView: 3.5,
      });
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperSetting]);

  return (
    <Container>
      <Title>????????? ??????</Title>
      <ManinetBox>
        <div>
          <div
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/ethereum-hackmd/upload_c94877685be7e6cba035ca82681ede7f.png)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          ></div>
          <span>?????? ??????: ??????????????? Taproot ??????????????? ?????? ??????</span>
        </div>
        <div>
          <div
            style={{
              backgroundImage:
                "url(https://s3.ap-northeast-2.amazonaws.com/upload.xangle.io/images/research/common/20-e030c0f8-d399-48d4-bc2d-1d64803e0701.PNG)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          ></div>
          <span>?????? ?????? ??????: ???????????????, ??????????????? ??????????????? ?????????</span>
        </div>
      </ManinetBox>
      <TableBox>
        <div>
          <span>[90??? ?????????] ?????? ?????? ?????? & ?????? ?????????</span>
          <span>????????????</span>
        </div>
        <div>
          <span>[????????? ?????????] ???????????????</span>
          <span>????????????</span>
        </div>
        <div>
          <span>?????? ????????? 45% ?????? ?????? (2021-05-22 UTC 24:00)</span>
          <span>????????????</span>
        </div>
      </TableBox>
      {/* <SwiperStyle
        spaceBetween={20}
        slidesPerView={swiperSetting.slidesPerView}
        loop={true}
      >
        {!data ? (
          <SwiperSlide>loading...</SwiperSlide>
        ) : (
          data.map((item, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <div>?????????</div>
            </SwiperSlide>
          ))
        )}
      </SwiperStyle> */}
    </Container>
  );
}

export default DetailPage;
