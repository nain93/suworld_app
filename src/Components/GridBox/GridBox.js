import React, { useEffect } from "react";
import styled from "styled-components";
import plus from "../../img/plus.png";
import { IoMdArrowDropup } from "react-icons/io";
import { useLocation, Link, useParams } from "react-router-dom";
import ContentDetail from "../../Detail/ContentDetail";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));
  width: 100%;
  grid-gap: 15px;
  /* margin: 1% 0; */

  > a {
    border-radius: 15px;
  }
  > a:first-child {
    grid-column: 1/3;
    grid-row: 1;
  }

  > a:not(:first-child) {
    height: auto;
  }
  > div {
    grid-column: 1/3;
    height: 5vh;
    border-radius: 5px;
  }
`;

const ItemLink = styled(Link)`
  background-position: center center;
  background-size: cover;
  color: black;
  img {
    width: 100%;
    height: 150px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    @media screen and (min-width: 0px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }

  span {
    @media screen and (min-width: 0px) {
      font-size: 0.6rem;
      line-height: 1.5;
    }
    @media screen and (min-width: 768px) {
      font-size: 0.8rem;
      line-height: 20px;
    }
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
`;

const MoreBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
  width: 100%;
  border-radius: 5px;
  height: 5vh;
  box-shadow: 0px 7px 5px -2px #c4d2ff;
  button {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6%;
      margin-left: 1%;
    }
  }
`;

function GridBox({ dummyData, setCount, count, category }) {
  const { pathname } = useLocation();
  const { id } = useParams();

  const handleMoreClick = () => {
    if (dummyData.length > 7) {
      setCount(0);
      return;
    }
    setCount((count) => count + 4);
    return;
  };

  useEffect(() => {
    setCount(0);
    return () => {
      if (pathname !== "/main") {
        setCount(0);
      }
    };
  }, [setCount, pathname]);

  return (
    <Container>
      {!dummyData ? (
        <div>loading...</div>
      ) : (
        dummyData.map((item) => (
          <ItemLink key={item.id} to={`/${item.id}`}>
            <div>
              <img src={item.img} alt="img" />
            </div>

            <Desc>
              <h1>{item.name}</h1>
              <span>{item.desc}</span>
            </Desc>
          </ItemLink>
        ))
      )}
      <MoreBtn>
        <button onClick={handleMoreClick}>
          {dummyData.length > 7 ? (
            <>
              <span>접기</span>
              <IoMdArrowDropup />
            </>
          ) : (
            <>
              <span>더 보기</span>
              <img src={plus} alt="plus" />
            </>
          )}
        </button>
      </MoreBtn>
    </Container>
  );
}

export default GridBox;
