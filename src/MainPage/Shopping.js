import React from "react";
import styled from "styled-components";
import { GlobalContainer } from "../GolbalStyles";
import dummyData from "../dummyData";
import dummyData2 from "../dummyData2";
import { useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SliderAd from "../Components/Slider/SliderAd";
import SliderList from "../Components/Slider/SliderList";
import ListBox from "../Components/ListBox/ListBox";
import GridBoxC from "../Components/GridBox/GridBoxC";

const Container = styled(GlobalContainer)`
  height: 100%;
  @media screen and (min-width: 0px) {
    button {
      font-size: 0.8em;
    }
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    button {
      font-size: 1em;
    }
    font-size: 1.5rem;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  button {
    padding-left: 0px;
    display: flex;
  }
`;

const MainNetSection = styled.div``;
function Shopping() {
  const history = useHistory();
  return (
    <Container>
      <Header>
        <button onClick={() => history.goBack(1)}>
          <AiOutlineArrowLeft size={20} />
        </button>
        쇼핑
      </Header>
      <MainNetSection>
        <SliderList dummyData={dummyData2.result.List1} />
        <SliderAd />
        <ListBox dummyData={dummyData.funItem4.result.slice(0, 3)} />
        <GridBoxC dummyData={dummyData.funItem5.result.slice(0, 6)} />
      </MainNetSection>
    </Container>
  );
}

export default Shopping;
