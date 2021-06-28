import React, { useState } from "react";
import styled from "styled-components";
import dummyData from "../../dummyData";

const TabNavWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  padding: 20px 20px;
`;

const TabNavBlock = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  margin: auto;

  button {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    color: white;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    z-index: 5;
  }
`;

const PopNav = (props) => {
  const [clickValue, setClickValue] = useState("all");

  return (
    <TabNavWrap>
      <TabNavBlock>
        <button
          value="all"
          style={
            clickValue === "all"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            props.setTabListNumber(dummyData.funItem1.result);
          }}
        >
          전체
        </button>
      </TabNavBlock>
      <TabNavBlock>
        <button
          value="shop"
          style={
            clickValue === "shop"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            props.setTabListNumber(dummyData.funItem2.result);
          }}
        >
          쇼핑
        </button>
      </TabNavBlock>
      <TabNavBlock>
        <button
          value="game"
          style={
            clickValue === "game"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            props.setTabListNumber(dummyData.funItem3.result);
          }}
        >
          게임
        </button>
      </TabNavBlock>
      <TabNavBlock>
        <button
          value="wallet"
          style={
            clickValue === "wallet"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            props.setTabListNumber(dummyData.funItem4.result);
          }}
        >
          지갑
        </button>
      </TabNavBlock>
      <TabNavBlock>
        <button
          value="mining"
          style={
            clickValue === "mining"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            props.setTabListNumber(dummyData.funItem5.result);
          }}
        >
          마이닝
        </button>
      </TabNavBlock>
      <TabNavBlock>
        <button
          value="mainnet"
          style={
            clickValue === "mainnet"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            props.setTabListNumber(dummyData.funItem6.result);
          }}
        >
          메인넷
        </button>
      </TabNavBlock>
      <TabNavBlock>
        <button
          value="community"
          style={
            clickValue === "community"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            props.setTabListNumber(dummyData.funItem7.result);
          }}
        >
          커뮤니티
        </button>
      </TabNavBlock>
      <TabNavBlock>
        <button
          value="enter"
          style={
            clickValue === "enter"
              ? { backgroundColor: "#7048e8" }
              : { backgroundColor: "#adb5bd" }
          }
          onClick={(e) => {
            setClickValue(e.target.value);
            props.setTabListNumber(dummyData.funItem8.result);
          }}
        >
          엔터
        </button>
      </TabNavBlock>
    </TabNavWrap>
  );
};

export default PopNav;
