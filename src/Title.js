import React from "react";
import styled from "styled-components";
import wallet from "./img/wallet.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  @media screen and (min-width: 0px) {
    img {
      width: 7%;
      height: 7%;
    }
    h1 {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 768px) {
    img {
      width: 6%;
      height: 6%;
    }
    h1 {
      font-size: 1.5rem;
    }
  }
  a {
    img {
      width: 100%;
    }
    width: 6%;
  }
`;

function Title() {
  return (
    <Container>
      <Link to="/">
        <h1>SUWORLD</h1>
      </Link>
      <a href="https://wt.rmoa.net/#/">
        <img src={wallet} alt="wallet" />
      </a>
    </Container>
  );
}

export default Title;
