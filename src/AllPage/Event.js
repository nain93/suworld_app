import React from "react";
import styled from "styled-components";
import { GlobalContainer } from "../GolbalStyles";
import EventCard from "../Components/EventCard";
import SliderAd from "../Components/Slider/SliderAd";
import dummyData from "../dummyData2";
import dummyData2 from "../dummyData2";

const Container = styled(GlobalContainer)``;

const Title = styled.div`
  font-size: 15pt;
  padding: 20px 20px 0;
`;

function Event() {
  return (
    <Container>
      <Title>진행중인 이벤트</Title>
      <EventCard dummyData={dummyData.result.Event1} />
      <SliderAd dummyData2={dummyData2.result.Ad1.data} />
      <EventCard dummyData={dummyData.result.Event1} />
    </Container>
  );
}

export default Event;
