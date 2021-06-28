import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { GlobalContainer } from "../GolbalStyles";
import SliderAd from "../Components/Slider/SliderAd";
import { Link, useLocation } from "react-router-dom";

const Container = styled(GlobalContainer)`
  box-sizing: border-box;
`;

// 카테고리 타이틀
const CategorySectionTtitle = styled.div`
  font-size: 15pt;
  padding: 20px 20px 0;
`;

//카테고리 블록 1개
const CategorySectionBlock = styled.div`
  width: calc(100% - 40px);
  height: 10vh;
  background-color: #eee;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  margin: 20px;

  .category-content {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  svg {
    width: 22px;
    height: 22px;
    background-color: #7048e8;
    border-radius: 50%;
    color: white;
    font-size: 9pt;
    cursor: pointer;
  }
`;
// 카테고리 블록 반복 사용
function Category() {
  const { pathname } = useLocation();

  return (
    <Container>
      <CategorySectionTtitle>카테고리</CategorySectionTtitle>
      <CategorySectionBlock current={pathname === "/all/category"}>
        <Link to="/shopping">
          <div className="category-content">
            <p>쇼핑</p>
            <AiOutlinePlus />
          </div>
        </Link>
      </CategorySectionBlock>
      <CategorySectionBlock current={pathname === "/all/category"}>
        <Link to="/game">
          <div className="category-content">
            <p>게임</p>
            <AiOutlinePlus />
          </div>
        </Link>
      </CategorySectionBlock>
      <CategorySectionBlock current={pathname === "/all/category"}>
        <Link to="/wallet">
          <div className="category-content">
            <p>지갑</p>
            <AiOutlinePlus />
          </div>
        </Link>
      </CategorySectionBlock>
      <CategorySectionBlock current={pathname === "/all/category"}>
        <Link to="/mining">
          <div className="category-content">
            <p>마이닝</p>
            <AiOutlinePlus />
          </div>
        </Link>
      </CategorySectionBlock>
      <CategorySectionBlock current={pathname === "/all/category"}>
        <Link to="/mainnet">
          <div className="category-content">
            <p>메인넷</p>
            <AiOutlinePlus />
          </div>
        </Link>
      </CategorySectionBlock>
      <CategorySectionBlock current={pathname === "/all/category"}>
        <Link to="/community">
          <div className="category-content">
            <p>커뮤니티</p>
            <AiOutlinePlus />
          </div>
        </Link>
      </CategorySectionBlock>
      <CategorySectionBlock current={pathname === "/all/category"}>
        <Link to="/enter">
          <div className="category-content">
            <p>엔터</p>
            <AiOutlinePlus />
          </div>
        </Link>
      </CategorySectionBlock>
      <SliderAd />
    </Container>
  );
}

export default Category;
