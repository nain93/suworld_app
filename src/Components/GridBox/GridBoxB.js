import React, { useEffect } from "react";
import styled from "styled-components";
import plus from "../../img/plus.png";
import { IoMdArrowDropup } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(20vh, 1fr));
  width: 100%;
  grid-gap: 5px 0px;
  margin: 1% 0;

  > div {
    height: 20vh;
    border-radius: 15px;
  }
  > div:not(:last-child) {
    display: flex;
    flex-direction: column;
    width: 100%;
    > div {
      height: 20%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
    margin: 2% 0px;
  }
  > div:last-child {
    grid-column: 1/3;
    height: 5vh;
    border-radius: 5px;
  }

  @media screen and (min-width: 0px) {
    font-size: 0.8em;
  }
  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
`;

const ItemLink = styled(Link)`
  background-position: center center;
  background-size: cover;
  color: black;
  border-radius: 15px;
  height: 100%;
  width: 100%;
`;

const MoreBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
  width: 100%;
  border-radius: 5px;
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

function GridBoxB({ dummyData, setCount, count }) {
  const { pathname } = useLocation();

  const handleMoreClick = () => {
    // if (count > 12) {
    //   setCount(0);
    //   return;
    // }
    if (dummyData.length > 7) {
      setCount(0);
      return;
    }

    setCount((count) => count + 1);
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
        dummyData.map((item, idx) => (
          <div key={item.id}>
            <ItemLink
              to={`/${item.id}`}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            ></ItemLink>
            <div>{item.title}</div>
          </div>
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

export default GridBoxB;
