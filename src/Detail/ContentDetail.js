import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { GlobalContainer } from "../GolbalStyles";
import { IoIosArrowBack } from "react-icons/io";
import dummyData from "../dummyData";

const Container = styled(GlobalContainer)``;

const GobackBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ItemBox = styled.div`
  div:first-child {
    width: 100%;
    margin: 20px 0px;
    img {
      width: 100%;
      border-radius: 15px;
    }
  }
  div:last-child {
    h1 {
      font-size: 1rem;
      margin: 5px 0px;
    }
  }
`;

function ContentDetail() {
  const history = useHistory();
  const { id } = useParams();

  const handleGoback = () => {
    history.goBack(1);
  };

  return (
    <Container>
      {console.log(id)}
      <GobackBtn onClick={handleGoback}>
        <IoIosArrowBack />
        뒤로
      </GobackBtn>
      <ItemBox>
        <div>
          <img src={dummyData.funItem1.result[0].img} alt="img" />
        </div>

        <div>
          <h1>{dummyData.funItem1.result[0].name}</h1>
          <span>{dummyData.funItem1.result[0].desc}</span>
        </div>
      </ItemBox>
    </Container>
  );
}

export default ContentDetail;
