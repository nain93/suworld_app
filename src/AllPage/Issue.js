import React, { useState } from "react";
import styled from "styled-components";
import dummyData from "../dummyData";
import SliderList2 from "../Components/Slider/SliderList2";
import dummyData2 from "../dummyData2";

const Container = styled.div``;

const ContentBox = styled.div`
  padding: 10px 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin: 0 10px;
    }
    > div {
      display: flex;
      flex-direction: column;
      span:last-child {
        opacity: 0.5;
        font-size: 10pt;
      }
    }
  }
`;

const ImgBox = styled.img`
  width: 140px;
  height: 100px;
  border-radius: 10px;
  margin: 0 10px;
`;

const BtnBox = styled.div`
  overflow: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

  padding: 0 20px;
  button {
    width: 80px;
    height: 30px;
    border-radius: 3px;
    margin: 0px 5px;
    color: white;
  }
`;

const Title = styled.div`
  font-size: 15pt;
  padding: 10px 20px;
`;

function Issue() {
  const [clickValue, setClickValue] = useState("all");
  const [listData, setListData] = useState(
    dummyData.funItem1.result.slice(0, 3)
  );

  return (
    <Container>
      <Title>이슈</Title>
      <BtnBox>
        <button
          value="all"
          style={
            clickValue === "all"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            setListData(dummyData.funItem1.result.slice(0, 3));
          }}
        >
          규제/정책
        </button>
        <button
          value="shop"
          style={
            clickValue === "shop"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            setListData(dummyData.funItem2.result.slice(0, 3));
          }}
        >
          산업/테크
        </button>
      </BtnBox>
      {listData.map((item) => (
        <ContentBox key={item.id}>
          <div>
            <ImgBox src={item.img} alt="img"></ImgBox>
            <div>
              <span>{item.name}</span>
              <span>카테고리</span>
            </div>
          </div>
        </ContentBox>
      ))}
      <Title>블록人</Title>
      <SliderList2 dummyData={dummyData2.result.List1} />
      <SliderList2 dummyData={dummyData2.result.List2} />
      <SliderList2 dummyData={dummyData2.result.List3} />
    </Container>
  );
}

export default Issue;
