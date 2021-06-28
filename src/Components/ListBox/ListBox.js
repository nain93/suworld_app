import React from "react";
import styled from "styled-components";

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

function ListBox({ dummyData }) {
  return (
    <Container>
      <Title>인기차트</Title>
      {dummyData.map((item) => (
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

export default ListBox;
