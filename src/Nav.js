import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1%;
  height: 7vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  a {
    color: ${(props) => (props.current ? "#9100ff" : "black")};
  }
  border-bottom: 1px solid
    ${(props) => (props.current ? "#9100ff" : "transparent")};
`;

function Nav() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Item current={pathname === "/all"}>
        <Link to="/all">추천</Link>
      </Item>
      <Item current={pathname === "/all/popular"}>
        <Link to="/all/popular">인기</Link>
      </Item>
      <Item current={pathname === "/all/category"}>
        <Link to="/all/category">카테고리</Link>
      </Item>
      <Item current={pathname === "/all/event"}>
        <Link to="/all/event">이벤트</Link>
      </Item>
      <Item current={pathname === "/all/issue"}>
        <Link to="/all/issue">이슈</Link>
      </Item>
    </Container>
  );
}

export default Nav;
