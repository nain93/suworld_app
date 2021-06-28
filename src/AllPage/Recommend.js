import React from "react";
import styled from "styled-components";
import { GlobalContainer } from "../GolbalStyles";
import SliderList from "../Components/Slider/SliderList";
import SliderCard from "../Components/Slider/SliderCard";
import Slider from "../Components/Slider/Slider";
import SliderAd from "../Components/Slider/SliderAd";
import ListTabBox from "../Components/ListBox/ListTabBox";
import dummyData2 from "../dummyData2";

const Container = styled(GlobalContainer)``;

function Recommend() {
  return (
    <Container>
      <SliderCard dummyData={dummyData2.result.Card1} />
      <Slider />
      <SliderList dummyData={dummyData2.result.List1} />
      <SliderList dummyData={dummyData2.result.List2} />
      <SliderAd dummyData2={dummyData2.result.Ad1.data} />
      <ListTabBox />
      <SliderList dummyData={dummyData2.result.List3} />
      <SliderList dummyData={dummyData2.result.List4} />
      <SliderCard dummyData={dummyData2.result.Card1} />
      <SliderAd dummyData2={dummyData2.result.Ad1.data} />
    </Container>
  );
}

export default Recommend;
