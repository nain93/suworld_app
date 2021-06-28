import React, { useState } from "react";
import styled from "styled-components";
import dummyData from "../../dummyData";

const Container = styled.div`
  padding: 20px;
`;

const ContentBox = styled.div`
  padding: 10px 0px;
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

const Title = styled.div``;

const ImgBox = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin: 0 10px;
`;

const BtnBox = styled.div`
  overflow: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  margin: 20px 0px;
`;

const BtnScrollBox = styled.div`
  display: inline-flex;
  button {
    width: 80px;
    height: 30px;
    border-radius: 3px;
    margin: 0px 5px;
    color: white;
  }
`;

function ListTabBox() {
  const [clickValue, setClickValue] = useState("all");
  const [listData, setListData] = useState(
    dummyData.funItem1.result.slice(0, 3)
  );

  return (
    <Container>
      <Title>인기차트</Title>
      <BtnBox>
        <BtnScrollBox>
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
            전체
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
            쇼핑
          </button>

          <button
            value="game"
            style={
              clickValue === "game"
                ? { backgroundColor: "#7048e8" }
                : { backgroundColor: "#adb5bd" }
            }
            onClick={(e) => {
              setClickValue(e.target.value);
              setListData(dummyData.funItem3.result.slice(0, 3));
            }}
          >
            게임
          </button>

          <button
            value="wallet"
            style={
              clickValue === "wallet"
                ? { backgroundColor: "#7048e8" }
                : { backgroundColor: "#adb5bd" }
            }
            onClick={(e) => {
              setClickValue(e.target.value);
              setListData(dummyData.funItem4.result.slice(0, 3));
            }}
          >
            지갑
          </button>

          <button
            value="mining"
            style={
              clickValue === "mining"
                ? { backgroundColor: "#7048e8" }
                : { backgroundColor: "#adb5bd" }
            }
            onClick={(e) => {
              setClickValue(e.target.value);
              setListData(dummyData.funItem5.result.slice(0, 3));
            }}
          >
            마이닝
          </button>

          <button
            value="mainnet"
            style={
              clickValue === "mainnet"
                ? { backgroundColor: "#7048e8" }
                : { backgroundColor: "#adb5bd" }
            }
            onClick={(e) => {
              setClickValue(e.target.value);
              setListData(dummyData.funItem6.result.slice(0, 3));
            }}
          >
            메인넷
          </button>

          <button
            value="community"
            style={
              clickValue === "community"
                ? { backgroundColor: "#7048e8" }
                : { backgroundColor: "#adb5bd" }
            }
            onClick={(e) => {
              setClickValue(e.target.value);
              setListData(dummyData.funItem7.result.slice(0, 3));
            }}
          >
            커뮤니티
          </button>

          <button
            value="enter"
            style={
              clickValue === "enter"
                ? { backgroundColor: "#7048e8" }
                : { backgroundColor: "#adb5bd" }
            }
            onClick={(e) => {
              setClickValue(e.target.value);
              setListData(dummyData.funItem8.result.slice(0, 3));
            }}
          >
            엔터
          </button>
        </BtnScrollBox>
      </BtnBox>
      {listData.map((item) => (
        <ContentBox key={item.id}>
          <div>
            <span>{item.id}</span>
            <ImgBox src={item.img} alt="img"></ImgBox>
            <div>
              <span>{item.name}</span>
              <span>카테고리</span>
            </div>
          </div>
        </ContentBox>
      ))}
    </Container>
  );
}

export default ListTabBox;
