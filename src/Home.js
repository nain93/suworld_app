import React from "react";
import styled from "styled-components";
import wallet2 from "./img/wallet2.png";
import mainnet from "./img/mainnet.png";
import enter from "./img/enter.png";
import mining from "./img/mining.png";
import shopping from "./img/shopping.png";
import game from "./img/game.png";
import commu from "./img/commu.png";
import all from "./img/all.png";
import { Link } from "react-router-dom";
import speak from "./img/speak.png";
import downarrow from "./img/downarrow.png";
import SwiperC from "./Components/SwiperC";
import Slider from "./Components/Slider/Slider";
import { GlobalContainer } from "./GolbalStyles";
import dummyData from "./dummyData";

const Container = styled(GlobalContainer)`
  height: 100%;
`;

const NavBox = styled.div`
  width: 100%;
  margin: 5px 0;
  > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50%;
    margin-bottom: 5%;
  }
  display: grid;
  grid-row-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const NewsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100%-40px);
  height: 4vh;
  margin: 10px;
  span {
    @media screen and (min-width: 0px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  > div:first-child {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
      @media screen and (min-width: 0px) {
        width: 15%;
      }
      @media screen and (min-width: 768px) {
        width: 10%;
      }
    }
  }
  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      width: 30%;
    }
    img {
      width: 100%;
    }
  }
`;

const NewsImg = styled.div``;

function Home() {
  return (
    <Container>
      <NavBox>
        <Link to="/mainnet">
          <img src={mainnet} alt="mainnet" />
          <span>메인넷</span>
        </Link>
        <Link to="/mining">
          <img src={mining} alt="mining" />
          <span>마이닝</span>
        </Link>
        <Link to="/wallet">
          <img src={wallet2} alt="wallet2" />
          <span>지갑</span>
        </Link>
        <Link to="/game">
          <img src={game} alt="game" />
          <span>게임</span>
        </Link>
        <Link to="/enter">
          <img src={enter} alt="enter" />
          <span>엔터</span>
        </Link>
        <Link to="/shopping">
          <img src={shopping} alt="shopping" />
          <span>쇼핑</span>
        </Link>
        <Link to="/community">
          <img src={commu} alt="commu" />
          <span>커뮤니티</span>
        </Link>
        <Link to="/all">
          <img src={all} alt="all" />
          <span>전체</span>
        </Link>
      </NavBox>
      <Slider />
      <NewsImg>
        <SwiperC
          pageCount={1}
          dummyData={dummyData.funItem1.result.slice(0, 6)}
        />
      </NewsImg>

      <NewsBox>
        <div>
          <img src={speak} alt="speak" />
          <span>슈월드 소식</span>
        </div>
        <div>
          <button>
            <img src={downarrow} alt="downarrow" />
          </button>
        </div>
      </NewsBox>
      <NewsImg>
        <SwiperC
          pageCount={1}
          dummyData={dummyData.funItem2.result.slice(0, 6)}
        />
      </NewsImg>
    </Container>
  );
}

export default Home;
