import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
`;

const Title = styled.div``;

const GridSection = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-gap: 5px;
  > div {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: 70%;
      border-radius: 5px;
    }
    > div:last-child {
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 10px;
      > span:first-child {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
      }
      > span:last-child {
        opacity: 0.5;
        font-size: 10pt;
      }
    }
  }
`;

function GridBoxC({ dummyData }) {
  return (
    <Container>
      <Title>추천리스트1</Title>
      <GridSection>
        {dummyData.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="img"></img>
            <div>
              <span>{item.name}</span>
              <span>카테고리</span>
            </div>
          </div>
        ))}
      </GridSection>
    </Container>
  );
}

export default GridBoxC;
